import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { PatientEntity } from './entities/patient.entity';

@Controller('patients')
@ApiTags('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) { }

  @Post()
  @ApiCreatedResponse({ type: PatientEntity })
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  @Get()
  @ApiCreatedResponse({ type: PatientEntity, isArray: true })
  findAll() {
    return this.patientsService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: PatientEntity })

  findOne(@Param('id') id: string) {
    return this.patientsService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: PatientEntity })

  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientsService.update(+id, updatePatientDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: PatientEntity })
  remove(@Param('id') id: string) {
    return this.patientsService.remove(+id);
  }
}
