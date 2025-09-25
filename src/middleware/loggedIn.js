import jwt from "jsonwebtoken";
import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET;

const loggedIn = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ error: "you must be logged in to access this resource" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(403).json({ error: "Access token missing from header." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Error verifying token", error.message);
    return res.status(401).json({ error: "invalid token" });
  }
};

export { loggedIn };
