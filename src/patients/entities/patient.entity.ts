import { ApiProperty } from "@nestjs/swagger";
import { Patient } from "@prisma/client";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class PatientEntity implements Patient {

    @ApiProperty({ type: Number, readOnly: true })
    id: number;

    @ApiProperty({ type: Number })
    age: number;

    @ApiProperty({ type: String })
    name: string;

    @ApiProperty({ type: String })
    email: string;

    @ApiProperty({
        required: false,
        nullable: true,
        type: String
    })
    @IsString()
    @IsOptional()
    notes: string | null;

    @ApiProperty({ type: Date })
    createdAt: Date;

    @ApiProperty({ type: Date })
    updatedAt: Date;
}
