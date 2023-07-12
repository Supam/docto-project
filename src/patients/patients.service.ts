import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { prismaErrorHandler } from '../utils/utils'

@Injectable()
export class PatientsService {

  constructor(private prisma: PrismaService) { };


  create(createPatientDto: CreatePatientDto) {
    return this.prisma.patient.create({ data: createPatientDto });
  }

  findAll() {
    return this.prisma.patient.findMany();
  }

  findOne(id: number) {
    return this.prisma.patient.findUnique({ where: { id } })
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    let res = null;

    try {
      res = await this.prisma.patient.update({
        where: { id },
        data: updatePatientDto
      })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError)
        throw prismaErrorHandler(e)
      throw new InternalServerErrorException() // PANIKKK (prisma sent us an error they don't know)
    }
    return res
  }

  remove(id: number) {
    return this.prisma.patient.delete({ where: { id } })
  }
}
