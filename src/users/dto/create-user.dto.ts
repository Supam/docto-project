import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {

    @ApiProperty({
        required: true,
        nullable: false,
        type: String
    })
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    address: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    birthday: Date;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    nationality: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    phoneNumber: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    sex: string;
}
