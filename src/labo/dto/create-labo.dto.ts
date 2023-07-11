import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

export class CreateLaboDto {

    @ApiProperty()
    @IsNumber()
    @ValidateNested({ each: true })
    @Type(() => Number)
    @IsNotEmpty()
    studies: Number[];

    @ApiProperty()
    @IsString()
    @ValidateNested({ each: true })
    @Type(() => String)
    @IsNotEmpty()
    addresses: String[];

    @ApiProperty()
    @IsString()
    @ValidateNested({ each: true })
    @Type(() => String)
    @IsNotEmpty()
    emails: String[];

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: String;

    @ApiProperty()
    @IsString()
    @ValidateNested({ each: true })
    @Type(() => String)
    @IsNotEmpty()
    phoneNumbers: String[];

    @ApiProperty()
    @IsString()
    @IsOptional()
    notes?: String;



}
