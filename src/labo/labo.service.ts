import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLaboDto } from './dto/create-labo.dto';
import { UpdateLaboDto } from './dto/update-labo.dto';

@Injectable()
export class LaboService {

    constructor(private prisma: PrismaService) { };

    create(createLaboDto: CreateLaboDto) {
        return this.prisma.researchCenter.create({ data: createLaboDto });
    }

    findAll() {
        return this.prisma.researchCenter.findMany();
    }

    findOne(id: number) {
        return this.prisma.researchCenter.findUnique({ where: { id } });
    }

    update(id: number, updateLaboDto: UpdateLaboDto) {
        return this.prisma.researchCenter.update({
            where: { id },
            data: updateLaboDto
        });
    }

    remove(id: number) {
        return this.prisma.researchCenter.delete({ where: { id }});
    }
}
