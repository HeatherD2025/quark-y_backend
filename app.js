const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();
const router = require('express').Router();
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
const authorizedRoutes = require("./src/routes/authorized");
console.log('authorized routes loaded');
app.use("/api/authorized", authorizedRoutes);

const commentRoutes = require("./src/routes/comments");
app.use("/api/comments", commentRoutes);

app.post("/comments", async (req, res) => {
  const { articleUrl, articleTitle, content, userId } = req.body;

  const comment = await Prisma.comment.create({
    data: {
      articleUrl,
      articleTitle,
      content,
      user: { connect: { id: userId } },
    },
  });

  res.json(comment);
});


// Serves the HTML file that Vite builds
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client/dist/index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

// Default to 404 if no other route matched
app.use((req, res) => {
  res.status(404).send("Not found.");
});



// Export the app
module.exports = {
  app, 
  router, 
  bcrypt, 
  jwt,
  authorizedRoutes, 
  commentRoutes
}
