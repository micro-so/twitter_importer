import express, { type Express, type Request, type Response, type NextFunction } from 'express';
import config from './config';
import prisma from './db';
import twitterRoutes from './routes/twitterRoutes';

const app: Express = express();
const port = config.port || 3000;

app.use(express.json());

app.use('/api', twitterRoutes);

// Global error handler (very basic)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', (req: Request, res: Response) => {
  res.send('Twitter Importer Backend is running!');
});

async function main() {
  // Test database connection (optional)
  try {
    await prisma.$connect();
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1); // Exit if DB connection fails
  }

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

main().catch(console.error);
