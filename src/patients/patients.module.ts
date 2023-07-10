import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [PatientsController],
  providers: [PatientsService],
  imports: [PrismaModule]
})
export class PatientsModule { }
