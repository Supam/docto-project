import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { PrismaService } from '../prisma/prisma.service';
import { prismaErrorHandler } from '../utils/utils';
import { Prisma } from '@prisma/client';

@Injectable()
export class StudiesService {

  constructor(private prisma: PrismaService) { };


  async create(createStudyDto: CreateStudyDto) {
    let res = null
    try {
      res = await this.prisma.study.create({ data: createStudyDto });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError)
        throw prismaErrorHandler(e);
      throw new InternalServerErrorException(); // PANIKKK (prisma sent us an error they don't know)
    }
    return res
  }

  async findAll() {
    let res = null
    try {
      res = await this.prisma.study.findMany();
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError)
        throw prismaErrorHandler(e)
      throw new InternalServerErrorException() // PANIKKK (prisma sent us an error they don't know)
    }
    return res
  }

  async findOne(id: number) {
    let res = null
    try {
      res = await this.prisma.patient.findUnique({ where: { id } })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError)
        throw prismaErrorHandler(e)
      throw new InternalServerErrorException() // PANIKKK (prisma sent us an error they don't know)
    }
    return res
  }

  async update(id: number, updateStudyDto: UpdateStudyDto) {
    let res = null
    try {
      res = await this.prisma.patient.update({
        where: { id },
        data: updateStudyDto
      })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError)
        throw prismaErrorHandler(e)
      throw new InternalServerErrorException() // PANIKKK (prisma sent us an error they don't know)
    }
    return res
  }

  async remove(id: number) {
    let res = null
    try {
      res = await this.prisma.patient.delete({ where: { id } })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError)
        throw prismaErrorHandler(e)
      throw new InternalServerErrorException() // PANIKKK (prisma sent us an error they don't know)
    }
    return res
  }
}
