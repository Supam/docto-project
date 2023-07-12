import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { genSaltSync, hashSync } from 'bcryptjs';
import { prismaErrorHandler } from '../utils/utils';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async findAll(): Promise<User[] | null> {
    let res = null;
    try {
      res = await this.prisma.user.findMany();
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError)
        prismaErrorHandler(e);
      else
        throw new InternalServerErrorException("This should never happen")
    }
    res = res?.map(item => new UserEntity({ ...item }))
    if (!res)
      return null;
    return res;
  }

  async findOne(id: number): Promise<User | null> {
    let res = null;
    try {
      res = await this.prisma.user.findUnique({ where: { id } });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError)
        prismaErrorHandler(e);
      else
        throw new InternalServerErrorException("This should never happen")
    }
    return new UserEntity({ ...res });
  }


  async findOnebyEmail(email: string): Promise<User | null> {
    let res = null;
    try {
      res = await this.prisma.user.findUnique({ where: { email } });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError)
        prismaErrorHandler(e);
      else
        throw new InternalServerErrorException("This should never happen")
    }
    return new UserEntity({ ...res });
  }

  async create(user: CreateUserDto): Promise<User | null> {
    let res = null;

    const saltRounds = 10;
    const salt = genSaltSync(saltRounds);
    user.password = hashSync(user.password, salt);
    try {
      res = await this.prisma.user.create({ data: user })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError)
        prismaErrorHandler(e);
      else
        throw new InternalServerErrorException("This should never happen")
    }
    return new UserEntity({ ...res });
  }

  async update(user: UpdateUserDto): Promise<User | null> {
    let res = null;
    try {
      res = await this.prisma.user.update({ where: { email: user.email }, data: user })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError)
        prismaErrorHandler(e);
      else
        throw new InternalServerErrorException("This should never happen")
    }
    return new UserEntity({ ...res });
  }
}
