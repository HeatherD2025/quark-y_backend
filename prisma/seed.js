import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();

  // Seed article
  const articleUrl =
    "https://medium.com/starts-with-a-bang/the-universe-requires-quantum-fields-not-just-quantum-particles-eb9e7cff737f";

  const existingItem = await prisma.article.findUnique({
    where: { articleUrl },
  });

  if (!existingItem) {
    await prisma.article.create({
      data: {
        articleUrl,
        headline: "placeholder headline",
        content: "placeholder content for this article",
        publishedAt: new Date(),
      },
    });

    console.log("Article seeded.");
  } else {
    console.log("Article already exists, skipping seed.");
  }

  const passwordPlain = process.env.ADMIN_PASSWORD;
  if (!passwordPlain) {
    throw new Error("Missing ADMIN_PASSWORD in environment variables");
  }
  const hashedPassword = await bcrypt.hash(passwordPlain, 10);


  // Create admin user
  await prisma.user.upsert({
    where: { email: "heatherdeliso@gmail.com" },
    update: {
      username: "QuarkyMOD",
      password: hashedPassword,
      isAdmin: true,
      avatarId: "avatar1.png",
      dateUpdated: new Date(),
  },
    create: {
      username: "QuarkyMOD",
      email: "heatherdeliso@gmail.com",
      password: hashedPassword,
      avatarId: "avatar1.png",
      isAdmin: true,
    },
  });

  // Create base users
  const users = [
    { username: "Ryan", email: "ryandeliso@gmail.com", password: "test1", avatarId: "avatar2.png", isAdmin: false },
    { username: "Nicole", email: "nicole@gmail.com", password: "test2", avatarId: "avatar4.png", isAdmin: false },
    { username: "Danny", email: "danny@gmail.com", password: "test3", avatarId: "avatar5.png", isAdmin: false },
    { username: "Lex", email: "lex@gmail.com", password: "test4", avatarId: "avatar7.png", isAdmin: false },
  ];

  for (const user of users) {
    const hashed = await bcrypt.hash(user.password, 10);
    await prisma.user.create({
      data: {
        username: user.username,
        email: user.email,
        password: hashed,
        avatarId: user.avatarId,
        isAdmin: false,
      },
    });
  }

  console.log("Seed data created successfully");
}

main()
  .catch((e) => {
    console.error("Error seeding data", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
