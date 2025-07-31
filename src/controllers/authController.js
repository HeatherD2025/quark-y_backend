import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../common/prismaClient.js';

const JWT_SECRET = process.env.JWT_SECRET;

export const login = async (req, res) => {
    const { username, password } = req.body;

    console.log('prisma in authController:', prisma);

    try {
        const user = await prisma.user.findUnique({
            where: { username },
        });

        if (!user) {
            return res.status(404).json({ message: 'user not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'invalid username or password' });
        }

        const token = jwt.sign(
            { id: user.id, username: user.username },
            JWT_SECRET,
            { expiresIn: '2h' }
        );

        const { password: _, ...userWithoutPassword } = user;

        res.status(200).json({
            user: userWithoutPassword,
            token,
        });

    } catch (error) {
        console.error('login error', error);
        res.status(500).json({ message: 'server error during login' });
    }
};


export const register = async (req, res) => {
      console.log('Request body:', req.body);

        if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: "Request body is missing" });
  }

    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists with that email.' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });
        console.log('user created')

        const token = jwt.sign(
            { id: newUser.id, username: newUser.username },
            JWT_SECRET,
            { expiresIn: '2h' }
        );
        console.log('token has been returned!')

        const { password: _, ...userWithoutPassword } = newUser;

        res.status(201).json({ user: userWithoutPassword, token });

    } catch (error) {
        console.error('Registration error', error);
        res.status(500).json({ error: 'something went wrong during registration' });
    }
};

export const getMe = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.user.id },
        });

        if (!user) {
            return res.status(404).json({ message: 'user not found' });
        }

        const { password: _, ...userWithoutPassword } = user;

        res.status(200).json({ user: userWithoutPassword });

    } catch (error) {
        console.error('GetMe error:', error);
        res.status(500).json({ message: 'server error retrieving user data' });
    }
     return res.status(200).json({ message: "Received" });
};
