import express from "express";
import cors from "cors";
import morgan from "morgan";
import 'dotenv/config';

import authRoutes from "./src/routes/authRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import commentRoutes from "./src/routes/commentRoutes.js";
import articleRouter from "./src/routes/articles.js";


const app = express();

// Middleware
// app.use(cors({
//   origin: ['http://localhost:5173', 'https://quarky.onrender.com'],
//   credentials: true,
// }));
app.use(cors({ origin: true, credentials: true }));

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/articles", articleRouter);

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);

// 
app.get('/api/articles/:articleUrl', async (req, res) => {
  const { articleUrl } = req.params;

  const article = await prisma.article.findUnique({
    where: { articleUrl: decodeURIComponent(articleUrl) },
    include: { comments: true }
  });

  if (!article) return res.status(404).json({ message: 'Article not found'});

  res.json(article);
})

app.get("/api/nasa", async (req, res) => {
  try {
    const data = await getNasa(req.query);
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: "NASA image fetch failed" })    
  }
});


// Health Check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// 404 for unknown API routes
app.use(/.*/, (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Generic error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.stack);
  res
    .status(err.status || 500)
    .json({ error: err.message || "Internal server error" });
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
