const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();
const router = require('express').Router();
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
const authorizedRoutes = require("./src/routes/authorized");
app.use("/api/authorized", authorizedRoutes);

const commentRoutes = require("./src/routes/comments");
app.use("/api/comments", commentRoutes);

app.get("/", (req, res) => res.send("API is running"));

const client = require("./src/db/quarky");

// app.get('/api/user', async (req, res, next) => {
//   try {
//     const SQL = `SELECT * from notes;`;
//     const response = await client.query(SQL);
//     res.send(response.rows);
//   } catch (error) {
//     next (error);
//   }
// });

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

// app.get('/api/db-test', async (req, res) => {
//   try {
//     const result = await client.query('SELECT NOW()');
//     res.send(`DB connected. Current time: ${result.rows[0].now}`);
//   } catch (err) {
//     console.error('DB connection failed:', err);
//     res.status(500).send('Database connection failed');
//   }
// });

// Export the app
module.exports = {
  app, 
  router, 
  bcrypt, 
  jwt,
  authorizedRoutes, 
  commentRoutes}
