import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { StudiesService } from './studies.service';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { ApiCreatedResponse, ApiHeader } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { StudyEntity } from './entities/study.entity';

@Controller('studies')
export class StudiesController {
  constructor(private readonly studiesService: StudiesService) { }

  @Post()
  @UseGuards(AuthGuard)
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer token authentification is required for this route',
  })
  @ApiCreatedResponse({ type: StudyEntity })
  create(@Body() createStudyDto: CreateStudyDto) {
    return this.studiesService.create(createStudyDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer token authentification is required for this route',
  })
  @ApiCreatedResponse({ type: StudyEntity, isArray: true })
  findAll() {
    return this.studiesService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer token authentification is required for this route',
  })
  @ApiCreatedResponse({ type: StudyEntity })
  findOne(@Param('id') id: string) {
    return this.studiesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer token authentification is required for this route',
  })
  @ApiCreatedResponse({ type: StudyEntity })
  update(@Param('id') id: string, @Body() updateStudyDto: UpdateStudyDto) {
    return this.studiesService.update(+id, updateStudyDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer token authentification is required for this route',
  })
  @ApiCreatedResponse({ type: StudyEntity })
  remove(@Param('id') id: string) {
    return this.studiesService.remove(+id);
  }
}
