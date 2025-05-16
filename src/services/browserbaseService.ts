// This file will handle interactions with the Browserbase API.

import axios from 'axios';
import config from '../config';
import playwright from 'playwright';

const BROWSERBASE_API_URL = 'https://api.browserbase.com/v1/sessions'; // Changed from /v1/jobs

interface BrowserbaseJob {
    jobId: string;      // Assuming 'id' from response is the jobId
    viewerUrl: string;
    // Add other relevant fields like 'connectUrl' when we confirm their existence and names
}
// hi
interface BrowserbaseSession {
  id: string;
  createdAt: string;
  updatedAt: string;
  projectId: string;
  startedAt: string;
  expiresAt: string;
  status: string; // e.g., 'RUNNING'
  proxyBytes: number;
  keepAlive: boolean;
  region: string;
  connectUrl: string; // WSS URL for Playwright CDP
  seleniumRemoteUrl: string;
  signingKey: string;
}

// Response from POST /v1/sessions
interface BrowserbaseSessionCreationResponse extends BrowserbaseSession {}

interface CreateBrowserbaseJobResult {
  jobId: string;
  viewerUrl: string;
  connectUrl: string;       // To connect Playwright
  callbackUrlForScript: string; // For the script to call back to our API
}

/**
 * Creates a Browserbase session without a predefined script.
 * Returns details needed to connect to this session using Playwright CDP.
 */
export const createBrowserbaseJob = async (
  sessionId: string, // Our internal session ID
  userId: string,
): Promise<CreateBrowserbaseJobResult | null> => {
  console.log(`browserbaseService: Creating session for our sessionId: ${sessionId}, userId: ${userId}`);

  const callbackUrlForScript = `${config.apiBaseUrl}/api/twitter/import/callback?sessionId=${sessionId}`;
  console.log(`browserbaseService: Generated callback URL for script: ${callbackUrlForScript}`);

  const requestPayload = {
    projectId: config.browserbaseProjectId,
    // Note: We are not sending script, runtime, or headless here as per new understanding
  };

  console.log('Attempting to create Browserbase session with the following details:');
  console.log('Request URL:', BROWSERBASE_API_URL);
  console.log('Request Headers:', {
    'X-BB-API-Key': config.browserbaseApiKey ? '<hidden>' : 'NOT SET',
    'Content-Type': 'application/json',
  });
  console.log('Request Payload:', requestPayload);

  try {
    const response = await axios.post<BrowserbaseSessionCreationResponse>(
      BROWSERBASE_API_URL,
      requestPayload,
      {
        headers: {
          'X-BB-API-Key': config.browserbaseApiKey,
          'Content-Type': 'application/json',
        },
      },
    );

    console.log('Browserbase /v1/sessions raw response:', response.data);

    if (response.data?.id && response.data?.connectUrl) {
      const browserbaseSessionId = response.data.id;
      const viewerUrl = `https://www.browserbase.com/sessions/${browserbaseSessionId}`;
      
      return {
        jobId: browserbaseSessionId, // This is Browserbase's session ID
        viewerUrl: viewerUrl,
        connectUrl: response.data.connectUrl,
        callbackUrlForScript: callbackUrlForScript,
      };
    } 
    console.error('Browserbase session creation did not return expected data (id or connectUrl). Response:', response.data);
    return null;

  } catch (error: unknown) { 
    if (axios.isAxiosError(error)) {
      console.error(
        'Error creating Browserbase session - API responded with status:',
        error.response?.status,
        error.response?.data,
      );
    } else if (error instanceof Error) {
      console.error('Error creating Browserbase session - Setup error:', error.message);
    } else {
      console.error('Error creating Browserbase session - Unknown error:', error);
    }
    return null;
  }
};

/**
 * Connects to an existing Browserbase session via Playwright CDP
 * and runs the Twitter login script.
 * Signals completion/failure by POSTing to the provided callbackUrl.
 */
export const runTwitterLoginScriptInSession = async (
  connectUrl: string,
  localSessionId: string, // Our internal session ID for logging/callback context
  userId: string,         // For potential use in script, e.g. filling username
  callbackUrl: string     // The URL our script will POST to (e.g., our /api/twitter/import/callback)
): Promise<void> => {
  console.log(`[PlaywrightScript - ${localSessionId}] Attempting to connect to Browserbase session via CDP: ${connectUrl}`);
  let browser = null;
  try {
    browser = await playwright.chromium.connectOverCDP(connectUrl, { timeout: 60000 }); // 60s timeout for connection
    const context = browser.contexts()[0] || await browser.newContext();
    const page = context.pages()[0] || await context.newPage();

    console.log(`[PlaywrightScript - ${localSessionId}] Connected. Navigating to Twitter login...`);
    await page.goto('https://twitter.com/login', { waitUntil: 'networkidle', timeout: 60000 });

    // Basic check if already logged in (e.g., if /home is the URL after redirect)
    if (page.url().includes('twitter.com/home')) {
      console.log(`[PlaywrightScript - ${localSessionId}] Already logged in (on /home). AUTH_COMPLETE.`);
      await axios.post(callbackUrl, { status: 'AUTHENTICATED', data: { message: 'Already logged in.' } });
      return;
    }

    // NOTE: Actual login credential filling is highly dependent on Twitter's UI
    // and requires specific selectors. This is a placeholder.
    // You'll need to inspect Twitter's login page and update these selectors.
    console.log(`[PlaywrightScript - ${localSessionId}] On login page. Waiting for user to log in manually via Browserbase viewer or attempting automated login (if selectors were provided)...`);
    
    // For now, we assume manual login or a very simple (likely to fail) auto-login.
    // A robust solution would involve watching for specific elements or URL changes.

    // Wait for navigation to twitter.com/home as a sign of successful login
    // This could be after manual login via viewer or a (future) automated attempt.
    await page.waitForURL('**/home', { timeout: 300000 }); // 5 minutes for manual login + redirect
    console.log(`[PlaywrightScript - ${localSessionId}] Detected navigation to /home. AUTH_COMPLETE.`);
    await axios.post(callbackUrl, { status: 'AUTHENTICATED', data: { message: 'Login successful (navigated to /home).' } });

  } catch (scriptError: unknown) { 
    let errorMessage = 'Unknown script error';
    if (scriptError instanceof Error) {
      errorMessage = scriptError.message;
    }
    console.error(`[PlaywrightScript - ${localSessionId}] Error during script execution:`, errorMessage);
    try {
      await axios.post(callbackUrl, { status: 'FAILED', error: { message: errorMessage } });
    } catch (callbackPostError: unknown) { 
      let cbErrorMessage = 'Unknown callback post error';
      if (callbackPostError instanceof Error) {
        cbErrorMessage = callbackPostError.message;
      }
      console.error(`[PlaywrightScript - ${localSessionId}] FATAL: Could not post FAILED status to callback.`, cbErrorMessage);
    }
  } finally {
    if (browser) {
      try {
        console.log(`[PlaywrightScript - ${localSessionId}] Closing browser connection.`);
        await browser.close();
      } catch (closeError: unknown) { 
        let closeErrMessage = 'Unknown error closing browser';
        if (closeError instanceof Error) {
          closeErrMessage = closeError.message;
        }
        console.error(`[PlaywrightScript - ${localSessionId}] Error closing browser connection:`, closeErrMessage);
      }
    }
  }
};
