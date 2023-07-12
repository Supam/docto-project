import { PrismaClient } from '@prisma/client';
import { genSaltSync, hashSync } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const saltRounds = 10;
  const salt = genSaltSync(saltRounds);

  const pass0 = 'test';
  const hash0 = hashSync(pass0, salt);
  const user0 = await prisma.user.upsert({
    where: { email: 'test' },
    update: {},
    create: {
      birthday: new Date("01-01-2000"),
      address: "test",
      email: "test",
      nationality: "test",
      password: hash0,
      phoneNumber: "test",
      sex: "test",
      username: "test",
    },
  });

  const pass1 = 'testpass';
  const hash1 = hashSync(pass1, salt);
  const user1 = await prisma.user.upsert({
    where: { email: 'thibault.viennot@gmail.com' },
    update: {},
    create: {
      birthday: new Date("2001-06-05"),
      address: "75 av de verdun",
      email: "thibault.viennot@gmail.com",
      nationality: "Français",
      password: hash1,
      phoneNumber: "0782903377",
      sex: "Homme",
      username: "thibault.viennot",
    },
  });


  const pass2 = 'fesses';
  const hash2 = hashSync(pass2, salt);
  const user2 = await prisma.user.upsert({
    where: { email: 'alexandre.david@gmail.com' },
    update: {},
    create: {
      birthday: new Date("1998-12-24"),
      address: "1 av de L'Elysée",
      email: "alexandre.david@gmail.com",
      nationality: "Russe",
      password: hash2,
      phoneNumber: "0696969420",
      sex: "2 à 3 fois par semaine",
      username: "alex.david",
    },
  });

  const pass3 = 'cestvrmsecure?';
  const hash3 = hashSync(pass3, salt);
  const user3 = await prisma.user.upsert({
    where: { email: 'lam.pouffe@pornhub.com' },
    update: {},
    create: {
      birthday: new Date("2005-09-12"),
      address: "69 av de Stalinhgrad",
      email: "lam.pouffe@pornhub.com",
      nationality: "Bangladesh",
      password: hash3,
      phoneNumber: "0606060606",
      sex: "tous les jours",
      username: "lam.sexure",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
