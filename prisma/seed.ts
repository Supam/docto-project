import { PrismaClient } from '@prisma/client';
import { genSaltSync, hashSync } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const saltRounds = 10;
  const salt = genSaltSync(saltRounds);

  const pass1 = 'testpass';
  const hash1 = hashSync(pass1, salt);

  const user1 = await prisma.user.upsert({
    where: { email: 'jon.doe@gmail.com' },
    update: {},
    create: {
      birthday:,
      address: "75 av de verdun",
      email: "thibault.viennot@gmail.com",
      nationality: "Français",
      password: hash1,
      phoneNumber: "0782903377",
      sex: "Home",
      username: "thibault.viennot",
    },
  });

  console.log(user1);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
