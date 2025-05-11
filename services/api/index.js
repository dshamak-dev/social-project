import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 80;

// Middlewares
app.use(cors());
app.use(express.json());

// Example API route
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Static fallback (optional)
app.get('*', (_req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
