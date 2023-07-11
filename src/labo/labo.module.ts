import { Module } from '@nestjs/common';
import { LaboService } from './labo.service';
import { LaboController } from './labo.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [LaboService],
  controllers: [LaboController],
  imports: [PrismaModule]

})
export class LaboModule { }
