import { ApiProperty } from "@nestjs/swagger";
import { User } from "@prisma/client";
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
    @ApiProperty({ type: Number })
    id: number;

    @ApiProperty()
    username: string;

    @ApiProperty({ type: String })
    email: string;

    @ApiProperty({ nullable: true, type: Number })
    patientId: number | null;

    @ApiProperty({ type: Date })
    createdAt: Date;

    @ApiProperty({ type: Date })
    updatedAt: Date;

    @Exclude()
    @ApiProperty({ type: String })
    password: string;
}
