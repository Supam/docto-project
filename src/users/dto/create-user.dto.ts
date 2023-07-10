import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({ required: true, nullable: false, type: String })
    username: string;

    @ApiProperty({ type: String })
    email: string;

    @ApiProperty({ type: String })
    password: string;
}
