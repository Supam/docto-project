import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateStudyDto {

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    researchCenterId: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    paperUrl?: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    patientCurrent: number

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    patientMax: number

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    notes?: string;
}
