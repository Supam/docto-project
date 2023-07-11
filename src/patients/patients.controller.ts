import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { PatientEntity } from './entities/patient.entity';
import { AuthGuard } from '../auth/auth.guard';

@Controller('patients')
@ApiTags('Patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) { }

  // - - - - - - - - - - GET - - - - - - - - - - -
  @Get()
  @UseGuards(AuthGuard)
  @ApiCreatedResponse({ type: PatientEntity, isArray: true })
  findAll() {
    return this.patientsService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @ApiCreatedResponse({ type: PatientEntity })
  findOne(@Param('id') id: number) {
    return this.patientsService.findOne(+id);
  }

  // - - - - - - - - - - POST - - - - - - - - - - -
  @Post()
  @UseGuards(AuthGuard)
  @ApiCreatedResponse({ type: PatientEntity })
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  // - - - - - - - - - - PATCH - - - - - - - - - - -
  @Patch(':id')
  @UseGuards(AuthGuard)
  @ApiCreatedResponse({ type: PatientEntity })
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientsService.update(+id, updatePatientDto);
  }

  // - - - - - - - - - - DELETE - - - - - - - - - - -
  @Delete(':id')
  @UseGuards(AuthGuard)
  @ApiCreatedResponse({ type: PatientEntity })
  remove(@Param('id') id: string) {
    return this.patientsService.remove(+id);
  }
}
