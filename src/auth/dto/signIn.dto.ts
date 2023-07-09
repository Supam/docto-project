import { ApiProperty } from "@nestjs/swagger";

export class SignInDto {
    @ApiProperty({ required: true })
    email: string;

    @ApiProperty({ required: true })
    password: string;
}
