import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'js.agustin.sz@gmail.com' },
    update: {},
    create: {
      email: 'js.agustin.sz@gmail.com',
      name: 'Agustín Sánchez',
      image: 'https://avatars.githubusercontent.com/u/12345678?v=4',
      accounts: {
        create: {
          type: 'oauth',
          provider: 'github',
          providerAccountId: '12345678', // Replace with actual GitHub user ID
          access_token: 'github_access_token_placeholder',
          token_type: 'bearer',
          scope: 'user,repo',
        },
      },
    },
  });

  // Create 300 advises for the user
  const advises = await Promise.all(
    Array.from({ length: 300 }).map((_, i) =>
      prisma.advise.create({
        data: {
          content: `Este es el contenido del consejo ${i + 1}.`,
          authorId: user.id,
        },
      }),
    ),
  );

  console.log(`Seed data created successfully!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });