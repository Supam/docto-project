import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

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
}
