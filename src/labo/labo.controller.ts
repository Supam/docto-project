import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { LaboService } from './labo.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { LaboEntity } from './entities/labo.entity';
import { CreateLaboDto } from './dto/create-labo.dto';
import { UpdateLaboDto } from './dto/update-labo.dto';

@Controller('labo')
@ApiTags('Laboratoire')
export class LaboController {
    constructor(private readonly labosService: LaboService) { }


    @Post()
    @UseGuards(AuthGuard)
    @ApiCreatedResponse({ type: LaboEntity })
    create(@Body() createPatientDto: CreateLaboDto) {
        return this.labosService.create(createPatientDto);
    }

    @Get()
    @UseGuards(AuthGuard)
    @ApiCreatedResponse({ type: LaboEntity, isArray: true })
    findAll() {
        return this.labosService.findAll();
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    @ApiCreatedResponse({ type: LaboEntity })
    findOne(@Param('id') id: string) {
        return this.labosService.findOne(+id);
    }

    @Patch(':id')
    @UseGuards(AuthGuard)
    @ApiCreatedResponse({ type: LaboEntity })
    update(@Param('id') id: string, @Body() updatePatientDto: UpdateLaboDto) {
        return this.labosService.update(+id, updatePatientDto);
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    @ApiCreatedResponse({ type: LaboEntity })
    remove(@Param('id') id: string) {
        return this.labosService.remove(+id);
    }
}
