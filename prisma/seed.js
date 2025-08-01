import { PrismaClient } from '../generated/prisma/index.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();

  // Check if the article already exists
  const articleUrl = "https://medium.com/starts-with-a-bang/the-universe-requires-quantum-fields-not-just-quantum-particles-eb9e7cff737f";

  const existingItem = await prisma.item.findUnique({
    where: { articleUrl }
  });

  if (!existingItem) {
    await prisma.item.create({
      data: { articleUrl }
    });
    console.log("Article seeded.");
  } else {
    console.log("Article already exists, skipping seed.");
  }

  const passwordPlain = process.env.ADMIN_PASSWORD;
  const hashedPassword = await bcrypt.hash(passwordPlain, 10);

  // Create admin user
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

  // Create base users
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

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error('Error seeding data', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
