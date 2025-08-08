import express from "express";
import cors from "cors";
import morgan from "morgan";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import articleRouter from "./routes/articles.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/articles', articleRouter)

// // API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);

// // Health Check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// // 404 for unknown API routes
app.use(/.*/, (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// // Generic error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal server error' });
});

if (app._router && app._router.stack) {
  app._router.stack.forEach((layer) => {
    if (layer.route) {
      console.log(
        `${Object.keys(layer.route.methods)[0].toUpperCase()} ${
          layer.route.path
        }`
      );
    }
  });
}

export default app;
