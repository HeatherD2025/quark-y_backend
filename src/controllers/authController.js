const { bcrypt, prisma, jwt } = require('../../app');
require('dotenv').config();

const WEB_TOKEN = process.env.WEB_TOKEN;

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await prisma.user.findFirst({
            where: { username },
        });

        if (!user) {
            return res.status(404).json({
                statusCode: 404,
                message: 'user not found',
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                statusCode: 401,
                message: 'login denied'
            });
        }

        const token = jwt.sign(
            {
            id: user.id, username: user.username
            },
            WEB_TOKEN,
            { expiresIn: '2h'}
       );

    const {password: _, ...userWithoutPassword } = user;

    res.status(200).json({
        user: userWithoutPassword,
        token,
    });

    } catch (error) {
        console.error('login error', error);
        res.status(500).json({
            statusCode: 500,
            message: 'server error duriong login',
        });
    }
};

const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await.prisma.user.findFirst({
            where: { username },
        });

        if (existingUser) {
            return res.status(409).json({ mesage: 'username already exists'});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await.prisma.user.create({
            data: {
                username,
                email, 
                password: hashedPassword,
            },
        });

        const token = jwt.sign(
            { id: newUser.is, username: newUser.username },
            WEB_TOKEN,
            { expiresIn: '2h' }
        );

        const { password: _, ...userWithoutPassword } = newUser;

        res.status(201).json({
            user: userWithoutPassword,
            token,
        });

    } catch (error) {
        console.error('registration error, error');
        res.status(500).json({ message: 'server error during registration' })
    }
};

module.exports = {
    login,
    register,
}