const { jwt } = require('../../app');
require('dotenv').config();

async function LoggedIn(req, res, next) {
 try {
    const token = req.header.authorization?.replace('Bearer', '');

    if (! token) {
        return res.status(401).json({ error: "you must be logged in to access this resource" })
    }
// Verify the token, attach to request object, call middleware and log errors
    const user = jwt.verify(token, process.env.WEB_TOKEN)
    req.user = user;
    next();
 } catch (error) {
    console.error('Error verifying token', error)
    return res.status(401).json({ error: 'invalid token'})
 }
}

module.exports = { LoggedIn };