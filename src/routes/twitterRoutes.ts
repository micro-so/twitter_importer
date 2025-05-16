// This file will define the API routes related to Twitter import.

import { Router } from 'express';
import {
    startImport,
    getImportStatus,
    handleBrowserbaseCallbackController
} from '../controllers/twitterController';

const router = Router();

// POST /api/twitter/import/start
router.post('/twitter/import/start', startImport);

// GET /api/twitter/import/status?sessionId=...
router.get('/twitter/import/status', getImportStatus);

// POST /api/twitter/import/callback (from Browserbase)
router.post('/twitter/import/callback', handleBrowserbaseCallbackController);

export default router;
