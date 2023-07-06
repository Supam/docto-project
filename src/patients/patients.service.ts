import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return this.prisma.patient.update({
      where: { id },
      data: updatePatientDto
    })
  }

  remove(id: number) {
    return this.prisma.patient.delete({ where: { id } })
  }
}
