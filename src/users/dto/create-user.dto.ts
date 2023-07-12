import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsString } from "class-validator";


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
    @IsString()
    @IsNotEmpty()
    address: string;

    @ApiProperty()
    @IsDateString()
    @IsNotEmpty()
    birthday: Date;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nationality: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    sex: string;
}
