import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async findOne(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async create(user: CreateUserDto): Promise<User | null> {
    return this.prisma.user.create({ data: user })
  }

  async update(user: UpdateUserDto): Promise<User | null> {
    return this.prisma.user.update({ where: { email: user.email }, data: user })
  }
}
