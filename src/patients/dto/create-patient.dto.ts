import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePatientDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    age: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    userId: number

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    notes?: string;

}
