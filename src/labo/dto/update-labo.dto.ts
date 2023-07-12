import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateLaboDto } from './create-labo.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateLaboDto extends PartialType(CreateLaboDto) {
    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    email: string;
}
