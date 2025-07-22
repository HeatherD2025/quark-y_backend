const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

const prisma = new PrismaClient();

async function main() {
    //clear existing users
    await prisma.user.deleteMany();

    const passwordPlain = process.env.ADMIN_PASSWORD;
    const hashedPassword = await bcrypt.hash(passwordPlain, 10);

    await prisma.user.createMany({
        data: [
            {
                userName: 'Heather',
                email: 'heatherdeliso@gmail.com',
                password: 'passwordPlain',
            },
        ],
    });

    console.log('seed data created successfully');
}

main()
.catch((e) => {
    console.error('Error seeding data', e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
});
