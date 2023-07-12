import { HttpException, InternalServerErrorException, Logger, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/client";



export function prismaErrorHandler(prismaError: Prisma.PrismaClientKnownRequestError) {
    switch (prismaError.code) {

        case 'P2012':
        case 'P2013':
        case 'P2018':
        case 'P2025':
            throw new NotFoundException()

        case 'P2002':
            throw new HttpException("Pre-Condition Failed", 412)

        default:
            Logger.debug(prismaError.code)
            throw new InternalServerErrorException("Unknow Prisma Error")
    }

}
