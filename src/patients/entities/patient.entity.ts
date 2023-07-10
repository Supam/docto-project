import { ApiProperty } from "@nestjs/swagger";
import { Patient } from "@prisma/client";

export class PatientEntity implements Patient {

    @ApiProperty({ type: Number })
    age: number;

    @ApiProperty({ type: Number })
    id: number;

    @ApiProperty({ type: String })
    name: string;

    @ApiProperty({ type: String })
    email: string;

    @ApiProperty({ required: false, nullable: true, type: String })
    notes: string | null;

    @ApiProperty({ type: Date })
    createdAt: Date;

    @ApiProperty({ type: Date })
    updatedAt: Date;
}
