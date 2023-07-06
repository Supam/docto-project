import { PrismaClient } from '@prisma/client'
import { async } from 'rxjs';

const prisma = new PrismaClient();

async function main() {
    const patient1 = await prisma.patient.upsert({
        where: { email: 'jon.doe@gmail.com' },
        update: {},
        create: {
            name: 'Jon Doe',
            email: 'jon.doe@gmail.com',
            age: 35
        }
    })

    const patient2 = await prisma.patient.upsert({
        where: { email: 'jean.patate@gmail.com' },
        update: {},
        create: {
            name: 'Jean Patate',
            email: 'jean.patate@gmail.com',
            notes: "c'est simplement une patate",
            age: 15
        }
    })

    console.log(({ patient1, patient2 }));
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1)
    })
    .finally(async () => { await prisma.$disconnect() });
