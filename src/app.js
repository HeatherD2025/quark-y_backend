import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import morgan from 'morgan';

import authorizedRoutes from './routes/authorized.js';
import commentsRoutes from './routes/comments.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// DEBUG: log all incoming json bodies
app.use((req, res, next) => {
  console.log('Incoming Request Body:', req.body);
  next();
});


// Routes
app.use('/api/authorized', authorizedRoutes);
app.use('/api/comments', commentsRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Serve frontend
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client/dist/index.html"));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || "Internal server error." });
});

// 404 fallback
app.use("/*splat", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

export default app;
