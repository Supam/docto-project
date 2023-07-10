import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePatientDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    age: number;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    notes?: string;
}
