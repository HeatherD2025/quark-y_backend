const { bcrypt, prisma, jwt } = require('../../app');
require('dotenv').config();

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

        const token = jwt.sign({
            id: user.id, username: user.username
        },
        process.env.WEB_TOKEN
    );

    const {password: _, ...userWithoutPassword } = user;

    res.status(200).json({
        user: userWithoutPassword,
        token,
    });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            statusCode: 500,
            message: 'server error',
        });
    }
};

const register = async (req, res) => {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const registerUser = await prisma.user.create({
        data: {
            username,
            password: hashedPassword,
        },
    });
    if (registerUser) {
        const token = jwt.sign(
          {
            id: registerUser.id,
            username: registerUser.username,
          }
    )
    }
}