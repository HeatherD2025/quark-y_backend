import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../common/prismaClient.js';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('Missing JWT_SECRET in environment variables');
}

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // debugging area

    console.log('Incoming login request:', req.body);
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    //

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
console.warn(`Login failed: user not found for username: ${username}`);
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
console.warn('Login failed: invalid password');
      return res.status(401).json({ message: 'Invalid username or password' });
    }

if (!JWT_SECRET) {
 console.error('Missing JWT_SECRET in environment variables');
return res.status(500).json({ message: 'Internal server configuration error' });
}

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

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
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
