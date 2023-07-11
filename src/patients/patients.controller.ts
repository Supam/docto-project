import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ApiCreatedResponse, ApiHeader, ApiTags } from '@nestjs/swagger';
import { PatientEntity } from './entities/patient.entity';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('patients')
@ApiTags('Patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) { }

  @Post()
  @UseGuards(AuthGuard)
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer token authentification is required for this route',
  })
  @ApiCreatedResponse({ type: PatientEntity })
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer token authentification is required for this route',
  })
  @ApiCreatedResponse({ type: PatientEntity, isArray: true })
  findAll() {
    return this.patientsService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer token authentification is required for this route',
  })
  @ApiCreatedResponse({ type: PatientEntity })
  findOne(@Param('id') id: string) {
    return this.patientsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer token authentification is required for this route',
  })
  @ApiCreatedResponse({ type: PatientEntity })
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientsService.update(+id, updatePatientDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer token authentification is required for this route',
  })
  @ApiCreatedResponse({ type: PatientEntity })
  remove(@Param('id') id: string) {
    return this.patientsService.remove(+id);
  }
}
