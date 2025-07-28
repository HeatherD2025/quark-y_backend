const express = require('express');
const router = express.Router();
const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});
client.connect();

// Health check route
// router.get('/health', async (req, res) => {
//   try {
//     const result = await client.query('SELECT NOW()');
//     res.json({ status: 'connected', time: result.rows[0].now });
//   } catch (err) {
//     res.status(500).json({ status: 'error', error: err.message });
//   }
// });

module.exports = router;
