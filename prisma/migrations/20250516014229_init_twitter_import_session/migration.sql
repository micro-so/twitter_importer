-- CreateTable
CREATE TABLE "TwitterImportSession" (
    "sessionId" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "jobId" TEXT,
    "viewerUrl" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending_creation',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "TwitterImportSession_jobId_key" ON "TwitterImportSession"("jobId");
