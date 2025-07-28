// const client = require('../db/client');

// exports.getAllUsers = async (req, resizeBy, next) => {
//     try {
//         const result = await client.query('SELECT * FROM users');
//         res.json(result.rows);
//     } catch (err) {
//         next(err);
//     }
// };

// exports.createUser = async (req, res, next) => {
//     try {
//         const { userName, email, password } = req.body;
//         const result = await client.query(
//             `INSERT INTO users(userName, email)
//             VALUES ($1, (SELECT id from email where userName = $2))
//             RETURNING *`
//             [userName, email]
//         );
//         res.status(201).json(result.rows[0]); 
//     } catch (err) {
//         next(err);
//     }
// };