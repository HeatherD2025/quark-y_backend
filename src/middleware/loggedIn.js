const { jwt } = require('../../app');
require('dotenv').config();

const WEB_TOKEN = process.env.WEB_TOKEN;

const LoggedIn = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: "you must be logged in to access this resource" })
    }

    const token = authHeader.split('')[1];

// Verify the token, attach to request object, call middleware and log errors
    try {
    const decoded = jwt.verify(token, WEB_TOKEN)
    req.user = decoded;
    next();
 } catch (error) {
    console.error('Error verifying token', error)
    return res.status(401).json({ error: 'invalid token'})
 }
}

module.exports = { LoggedIn };