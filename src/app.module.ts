import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PatientsModule } from './patients/patients.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LaboModule } from './labo/labo.module';

@Module({
  imports: [PrismaModule, PatientsModule, AuthModule, UsersModule, LaboModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
