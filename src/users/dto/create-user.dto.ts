import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({ required: true, nullable: false })
    username: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}
