import { PrismaClient } from '@prisma/client';
import { genSaltSync, hashSync } from 'bcryptjs';

const prisma = new PrismaClient();

async function seedUsers() {
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

async function seedLabo() {
  const labo1 = await prisma.researchCenter.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Labo Patate",
      studies: {
        createMany: {
          data: [{
            name: "Le Cancer",
            patientCurrent: 0,
            patientMax: 10,
          }, {
            name: "Le Cancer 2",
            patientCurrent: 0,
            patientMax: 10
          }, {
            name: "Le Cancer 3",
            patientCurrent: 0,
            patientMax: 10
          }, {
            name: "Le Cancer 4",
            patientCurrent: 0,
            patientMax: 10,
          }, {
            name: "Le Cancer 5",
            patientCurrent: 0,
            patientMax: 10
          }, {
            name: "Le Cancer 6",
            patientCurrent: 0,
            patientMax: 10
          }],
        },
      },
    },
  });
}

async function seedStudy() {

  const study4 = await prisma.study.upsert({
    where: { id: 4 },
    update: {},
    create: {
      researchCenterId: 1,
      name: "Le Cancer 4",
      patientCurrent: 0,
      patientMax: 10
    },
  });

  const study5 = await prisma.study.upsert({
    where: { id: 5 },
    update: {},
    create: {
      researchCenterId: 1,
      name: "Le Cancer 5",
      patientCurrent: 0,
      patientMax: 10
    },
  });

  const study6 = await prisma.study.upsert({
    where: { id: 6 },
    update: {},
    create: {
      researchCenterId: 1,
      name: "Le Cancer 6",
      patientCurrent: 0,
      patientMax: 10
    },
  });




}


async function main() {
  await seedUsers();
  await seedLabo();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
