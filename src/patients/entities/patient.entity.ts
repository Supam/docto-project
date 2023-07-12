import { ApiProperty } from "@nestjs/swagger";
import { Patient } from "@prisma/client";

export class PatientEntity implements Patient {

    @ApiProperty({ type: Number, readOnly: true })
    id: number;

    @ApiProperty({ type: Number })
    age: number;

    @ApiProperty({ type: String })
    name: string;

    @ApiProperty({ type: String })
    email: string;

    @ApiProperty({ type: Number })
    userId: number;

    @ApiProperty({
        required: false,
        nullable: true,
        type: String
    })
    notes: string | null;

    @ApiProperty({ type: Date })
    createdAt: Date;

    @ApiProperty({ type: Date })
    updatedAt: Date;
}
