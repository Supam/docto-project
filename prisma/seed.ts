import { PrismaClient } from '@prisma/client';
import { genSaltSync, hashSync } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const saltRounds = 10;
  const myPlaintextPassword = 'monpasswordtrèssécurisé';

  const salt = genSaltSync(saltRounds);
  const hash = hashSync(myPlaintextPassword, salt);

  const patient1 = await prisma.patient.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Jon Doe',
      age: 35,
    },
  });

  const patient2 = await prisma.patient.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Jean Patate',
      notes: "c'est simplement une patate",
      age: 15,
    },
  });

  const user1 = await prisma.user.upsert({
    where: { email: 'jon.doe@gmail.com' },
    update: {
      password: hash,
    },
    create: {
      email: 'jon.doe@gmail.com',
      username: 'jon',
      password: hash,
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
