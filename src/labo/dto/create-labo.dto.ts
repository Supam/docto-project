import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

export class CreateLaboDto {

    @ApiProperty()
    @IsString()
    @ValidateNested({ each: true })
    @Type(() => String)
    @IsNotEmpty()
    addresses: string[];

    @ApiProperty()
    @IsString()
    @ValidateNested({ each: true })
    @Type(() => String)
    @IsNotEmpty()
    emails: string[];

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @ValidateNested({ each: true })
    @Type(() => String)
    @IsNotEmpty()
    phoneNumbers: string[];

    @ApiProperty()
    @IsString()
    @IsOptional()
    notes?: string;



}
