-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TwitterImportSession" (
    "sessionId" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "jobId" TEXT,
    "viewerUrl" TEXT,
    "status" TEXT NOT NULL DEFAULT 'waiting',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_TwitterImportSession" ("createdAt", "jobId", "sessionId", "status", "updatedAt", "userId", "viewerUrl") SELECT "createdAt", "jobId", "sessionId", "status", "updatedAt", "userId", "viewerUrl" FROM "TwitterImportSession";
DROP TABLE "TwitterImportSession";
ALTER TABLE "new_TwitterImportSession" RENAME TO "TwitterImportSession";
CREATE UNIQUE INDEX "TwitterImportSession_jobId_key" ON "TwitterImportSession"("jobId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
