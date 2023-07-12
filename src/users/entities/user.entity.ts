import { ApiProperty } from "@nestjs/swagger";
import { User } from "@prisma/client";
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
    @Exclude()
    password: string;

    @ApiProperty({ type: String })
    address: string;

    @ApiProperty({ type: Date })
    birthday: Date;

    @ApiProperty({ type: String })
    nationality: string;

    @ApiProperty({ type: String })
    phoneNumber: string;

    @ApiProperty({ type: String })
    sex: string;

    @ApiProperty({ type: Number })
    id: number;

    @ApiProperty({ type: String })
    username: string;

    @ApiProperty({ type: String })
    email: string;

    @ApiProperty({ nullable: true, type: Number })
    patientId: number | null;

    @ApiProperty({ type: Date })
    createdAt: Date;

    @ApiProperty({ type: Date })
    updatedAt: Date;

    @ApiProperty({ type: String, nullable: true })
    notes: string | null;

}
