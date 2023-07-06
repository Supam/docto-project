import { ApiProperty } from "@nestjs/swagger";
import { Patient } from "@prisma/client";

export class PatientEntity implements Patient {

    @ApiProperty()
    age: number;

    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty({ required: false, nullable: true })
    notes: string | null;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
