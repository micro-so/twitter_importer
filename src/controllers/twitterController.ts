// This file will contain the logic for handling Twitter import API requests.
// We will implement the startImport and getImportStatus functions here.

import { Router } from 'express';
import type { Request, Response } from 'express';
import prisma from '../db';
import config from '../config';
import { 
    createBrowserbaseJob, 
    runTwitterLoginScriptInSession, // Added runTwitterLoginScriptInSession
    // pollBrowserbaseJobStatus // We might not need this if using callbacks directly
} from '../services/browserbaseService';
import { v4 as uuidv4 } from 'uuid';

export const startImport = async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.body;

    if (!userId) {
        res.status(400).json({ message: 'userId is required' });
        return;
    }

    const sessionId = uuidv4();

    try {
        console.log(`Starting import for userId: ${userId}, sessionId: ${sessionId}`);
        const browserbaseJobDetails = await createBrowserbaseJob(sessionId, userId);

        if (!browserbaseJobDetails || !browserbaseJobDetails.jobId || !browserbaseJobDetails.connectUrl || !browserbaseJobDetails.callbackUrlForScript) {
            console.error(`Error in startImport for sessionId ${sessionId}: Failed to create Browserbase session or essential details missing from response.`);
            // No DB update needed here, as the session was never successfully created with Browserbase to warrant a DB record yet.
            res.status(500).json({ message: 'Failed to initiate Twitter import session with Browserbase.', sessionId });
            return; // Stop execution
        }

        const { jobId: browserbaseSessionId, viewerUrl, connectUrl, callbackUrlForScript } = browserbaseJobDetails;

        // Now that Browserbase job is confirmed, create our session record
        const newSession = await prisma.twitterImportSession.create({
            data: {
                sessionId: sessionId, 
                userId: userId,
                jobId: browserbaseSessionId,
                viewerUrl: viewerUrl, 
                status: 'waiting_script', // Status indicates Browserbase session created, script is next
            },
        });

        console.log('TwitterImportSession created in DB:', newSession);

        res.status(201).json({
            sessionId: newSession.sessionId, 
            viewerUrl: newSession.viewerUrl,
            status: newSession.status,
        });

        // Now, run the Playwright script in the background (fire and forget from HTTP perspective)
        console.log(`[Controller - ${sessionId}] Triggering Playwright script in background for connectUrl: ${connectUrl}`);
        runTwitterLoginScriptInSession(connectUrl, sessionId, userId, callbackUrlForScript)
            .then(() => {
                console.log(`[Controller - ${sessionId}] Playwright script execution finished (or detached). Callback will handle final status.`);
            })
            .catch((scriptError: unknown) => {
                const errorMessage = scriptError instanceof Error ? scriptError.message : 'Unknown error launching script';
                console.error(`[Controller - ${sessionId}] Error launching Playwright script: ${errorMessage}`);
                // Attempt to update session to a failed state if script launch itself failed catastrophically
                // This update assumes the session WAS created in the DB successfully before script launch attempt.
                prisma.twitterImportSession.update({
                    where: { sessionId: sessionId },
                    data: { status: 'script_launch_failed' }, 
                }).catch(dbUpdateError => {
                    console.error(`[Controller - ${sessionId}] DB error updating status for script_launch_failed:`, dbUpdateError);
                });
            });

    } catch (error: unknown) {
        // sessionId is defined at the top of the try block, so it's always available here.
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred during import start';
        console.error(`Error in startImport for sessionId ${sessionId}:`, errorMessage);
        // At this point, if an error occurred, it's after Browserbase job creation attempt.
        // If the session was created in DB (meaning browserbaseJobDetails was successful),
        // an update to 'failed_setup' or similar might be appropriate if the error is between DB create and script launch.
        // However, the most likely errors here are from createBrowserbaseJob (handled above) or DB create itself.
        // If DB create failed, there's no record to update. If it succeeded & then something else before script launch failed, an update is okay.
        // For simplicity, if an error reaches this main catch, and it's NOT about Browserbase job creation failing (handled above),
        // we'll assume the DB record MIGHT exist and attempt an update. If it doesn't, Prisma's update (singular) might error.
        // A more robust approach might involve checking if res.headersSent or being more specific about error source.

        // Given the primary failure point (Browserbase API call) is handled above without a DB write,
        // this catch block is less likely to need a DB update for a 'failed_setup' status
        // unless the prisma.twitterImportSession.create call itself failed, in which case an update would also fail.
        // So, let's simplify: just log and respond if headers not sent.

        if (!res.headersSent) {
            res.status(500).json({ message: 'Failed to start Twitter import process', error: errorMessage, sessionId });
        }
    }
};

export const getImportStatus = async (req: Request, res: Response): Promise<void> => {
    const sessionIdFromQuery = req.query.sessionId;

    if (!sessionIdFromQuery || typeof sessionIdFromQuery !== 'string') {
        res.status(400).json({ message: 'sessionId query parameter is required and must be a string' });
        return;
    }
    const sessionId = sessionIdFromQuery; // Now we know it's a string

    try {
        const session = await prisma.twitterImportSession.findUnique({
            where: { sessionId: sessionId }, 
        });

        if (!session) {
            res.status(404).json({ message: 'Import session not found.' });
            return;
        }

        res.status(200).json({
            sessionId: session.sessionId, 
            status: session.status,
            viewerUrl: session.viewerUrl,
            jobId: session.jobId, 
            userId: session.userId,
            createdAt: session.createdAt,
            updatedAt: session.updatedAt,
        });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        console.error(`Error fetching status for session ${sessionId}:`, errorMessage);
        if (!res.headersSent) {
            res.status(500).json({ message: 'Failed to get import status', error: errorMessage });
        }
    }
};

export const handleBrowserbaseCallbackController = async (req: Request, res: Response): Promise<void> => {
    const sessionIdFromQuery = req.query.sessionId;
    const callbackPayload = req.body; 

    console.log(`Received Browserbase callback for sessionId: ${sessionIdFromQuery}`, callbackPayload);

    if (!sessionIdFromQuery || typeof sessionIdFromQuery !== 'string') {
        console.error('Callback received without a valid sessionId in query.');
        res.status(400).json({ message: 'Session ID is required from query and must be a string.' });
        return;
    }
    const localSessionId = sessionIdFromQuery; // Now we know it's a string

    // Depending on Browserbase payload structure, you might get jobId, status, logs, etc.
    // Example: const { jobId, status, logs } = callbackPayload;
    // For now, let's assume a 'status' and 'logs' (or similar) field.
    const jobStatus = callbackPayload.status; 
    const jobLogs = callbackPayload.logs || callbackPayload.output || ''; 

    try {
        const session = await prisma.twitterImportSession.findUnique({
            where: { sessionId: localSessionId }, 
        });

        if (!session) {
            console.error(`Session not found for sessionId: ${localSessionId} in callback.`);
            // Important: Still send 200 to Browserbase to acknowledge receipt, even if session is unknown on our side.
            // Otherwise, Browserbase might retry.
            res.status(200).json({ message: 'Callback acknowledged, session not found locally.' });
            return;
        }

        let newStatus = session.status;
        // The Playwright script sends a custom status: 'AUTHENTICATED' or 'FAILED'
        // It also sends 'data' or 'error' objects in the payload.
        const scriptSentStatus = callbackPayload.status; // This is what our script sends
        const scriptErrorDetails = callbackPayload.error;
        // const scriptData = callbackPayload.data; // Available if needed

        if (scriptSentStatus === 'AUTHENTICATED') {
            newStatus = 'authenticated';
            console.log(`Authentication successful callback for sessionId: ${localSessionId}.`);
        } else if (scriptSentStatus === 'FAILED') {
            newStatus = 'failed_script'; // More specific status for script failure
            console.error(`Script execution failed callback for sessionId: ${localSessionId}. Error:`, scriptErrorDetails);
        } else {
            // This case would be for unexpected statuses sent by the script, or if Browserbase itself calls back with its own statuses
            // like 'completed', 'finished', 'error' which our current script doesn't use for its primary callback.
            // For now, we'll log it and not change status unless it's an explicit 'failed' from Browserbase.
            console.log(`Received callback for session ${localSessionId} with unhandled jobStatus: '${scriptSentStatus}'. Payload:`, callbackPayload);
            if (scriptSentStatus === 'error' || scriptSentStatus === 'failed') { // General Browserbase failure
                newStatus = 'failed_browserbase';
                console.error(`Browserbase indicated a job failure for session ${localSessionId}.`);
            }
        }

        // Store error details if present and status indicates failure
        if ((newStatus === 'failed_script' || newStatus === 'failed_browserbase') && scriptErrorDetails) {
            // Ensure errorDetails is a string for Prisma schema (if it's defined as String)
            // Or, if your Prisma schema defines errorDetails as Json, you can store the object directly.
            // Assuming it's a String field for now:
            await prisma.twitterImportSession.update({
                where: { sessionId: localSessionId },
                data: { 
                    status: newStatus, 
                    // errorDetails: typeof scriptErrorDetails === 'object' ? JSON.stringify(scriptErrorDetails) : String(scriptErrorDetails)
                    // Let's keep it simple and just update status for now, can add errorDetails later if schema supports it
                },
            });
            // Re-fetch session if we want to include errorDetails in the log below without a separate update call
        } else if (newStatus !== session.status) { // Only update if there's a meaningful status change
            const updatedSession = await prisma.twitterImportSession.update({
                where: { sessionId: localSessionId },
                data: { status: newStatus },
            });
            console.log(`Session ${localSessionId} status updated to ${updatedSession.status}.`);
        } else {
            console.log(`No status change for session ${localSessionId} based on callback. Current: ${session.status}, ScriptSentStatus: ${scriptSentStatus}`);
        }

        res.status(200).json({ message: 'Callback received and processed' });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        console.error(`Error processing callback for sessionId ${localSessionId}:`, errorMessage);
        // Even on error, acknowledge receipt to Browserbase if possible
        if (!res.headersSent) {
            res.status(500).json({ message: 'Error processing callback', error: errorMessage });
        }
    }
};
