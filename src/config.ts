import dotenv from 'dotenv';
dotenv.config();

const config = {
  browserbaseApiKey: process.env.BROWSERBASE_API_KEY,
  browserbaseProjectId: process.env.BROWSERBASE_PROJECT_ID,
  apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000',
  databaseUrl: process.env.DATABASE_URL, // Prisma uses this directly from .env
  port: process.env.PORT || '3000',
};

// Validation for essential configs
if (!config.browserbaseApiKey) {
  console.error("Error: BROWSERBASE_API_KEY is not defined in .env file.");
  // process.exit(1); // Consider re-enabling for production or strict dev
}

if (!config.browserbaseProjectId) {
  console.error("Error: BROWSERBASE_PROJECT_ID is not defined in .env file.");
  // process.exit(1); // Consider re-enabling for production or strict dev
}

if (!config.databaseUrl) {
  console.error("Error: DATABASE_URL is not defined in .env file.");
  // process.exit(1);
}

export default config;
