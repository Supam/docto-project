import { InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/client";



export function prismaErrorHandler(prismaError: Prisma.PrismaClientKnownRequestError) {
    console.log(prismaError)
    switch (prismaError.code) {

        case 'P2012':
        case 'P2013':
        case 'P2018':
        case 'P2025':
            throw new NotFoundException()

        default:
            throw new InternalServerErrorException()
    }

}
