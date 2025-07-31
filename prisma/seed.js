import { PrismaClient } from '../generated/prisma/index.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
    await prisma.user.deleteMany();

    const passwordPlain = process.env.ADMIN_PASSWORD;
    const hashedPassword = await bcrypt.hash(passwordPlain, 10);

    // updates my user details if exists, or creates if not
    await prisma.user.upsert({
        where: { email: "heatherdeliso@gmail.com" },
        update: {
            username: 'QuarkyMOD',
            password: hashedPassword,
            isAdmin: true,
            dateUpdated: new Date(),
        },
        create: {
            username: 'QuarkyMOD',
            email: 'heatherdeliso@gmail.com',
            password: hashedPassword,
            isAdmin: true,
            dateCreated: new Date(),
            dateUpdated: new Date(),
        },
    });

    const users = [
        { username: 'Ryan', email: 'ryandeliso@gmail.com', password: 'test1' },
        { username: 'Nicole', email: 'nicole@gmail.com', password: 'test2' },
        { username: 'Danny', email: 'danny@gmail.com', password: 'test3' },
        { username: 'Lex', email: 'lex@gmail.com', password: 'test4' },
    ];

    for (const user of users) {
        const hashed = await bcrypt.hash(user.password, 10);
        await prisma.user.create({
            data: {
                username: user.username,
                email: user.email,
                password: hashed,
                isAdmin: false,
                dateCreated: new Date(),
                dateUpdated: new Date(),
            },
        });
    }

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
