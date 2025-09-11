import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../common/prismaClient.js';
import { allowedAvatarIds } from '../config/allowedAvatars.js';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('Missing JWT_SECRET in environment variables');
}

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) {
      console.warn(`Login failed: user not found for username: ${username}`);
      return res.status(404).json({ message: 'User not found' });
    }
    // VERIFY USER PASSWORD FOR LOGIN
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      console.warn('Login failed: invalid password');
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    // VERIFY TOKEN FOR ACCESS
    if (!JWT_SECRET) {
      console.error('Missing JWT_SECRET in environment variables');
      return res.status(500).json({ message: 'Internal server configuration error' });
    }
    // SET TOKEN AS PAYLOAD AND EXPIRATION
    const token = jwt.sign(
      { id: user.id, username: user.username, isAdmin: user.isAdmin },
      JWT_SECRET,
      { expiresIn: '2h' }
    );

    const { password: _, ...userWithoutPassword } = user;
    res.status(200).json({ user: userWithoutPassword, token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
};


// REGISTER NEW USERS
export const register = async (req, res) => {
  const { username, email, password, avatar} = req.body;

  if (!username || !email || !password || !avatar) {
    return res.status(400).json({ error: 'Required fields missing.' });
  }
  if (!allowedAvatarIds.includes(avatar)) {
      return res.status(400).json({ message: 'Invalid avatar selected' });
  }

  try {
    const existingEmail = await prisma.user.findUnique({ where: { email } });
    if (existingEmail) {
      return res.status(400).json({ error: 'Email already in use.' });
    }

    const existingUsername = await prisma.user.findUnique({ where: { username } });
    if (existingUsername) {
      return res.status(400).json({ error: 'Username already taken.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        avatar,
        isAdmin: false,
      },
    });

    const token = jwt.sign(
      { id: newUser.id, username: newUser.username, isAdmin: newUser.isAdmin },
      JWT_SECRET,
      { expiresIn: '2h' }
    );

    const { password: _, ...userWithoutPassword } = newUser;
    res.status(201).json({ user: userWithoutPassword, token });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Something went wrong during registration' });
  }
};


// FIND ALL USERS
export const getAllUsers = async (req, res) => {
  if (!req.user?.isAdmin) {
    return res.status(403).json({ message: 'Admin access only' });
  }

  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        isAdmin: true,
        dateCreated: true,
        dateUpdated: true
      },
    });

    res.status(200).json(users);
  } catch (error) {
    console.error('getAllUsers error:', error);
    res.status(500).json({ message: 'Server error retrieving users' });
  }
};


// DELETE INDIVIDUAL USERS AS A MOD
export const deleteUserById = async (req, res) => {
  if (!req.user?.isAdmin) {
    return res.status(403).json({ message: 'Admin access only' });
  }

  const userId = req.params.userid;

  try {
    const deletedUser = await prisma.user.delete({
      where: { id: userId },
    });

    const { password, ...userWithoutPassword } = deletedUser;
    res.status(200).json({ message: 'User deleted successfully', user: userWithoutPassword });

  } catch (error) {
    console.error('deleteUserById error:', error);
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(500).json({ message: 'Server error deleting user' });
  }
};
