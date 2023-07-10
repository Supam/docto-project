import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePatientDto } from './create-patient.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePatientDto extends PartialType(CreatePatientDto) {
    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    email: string;
}
