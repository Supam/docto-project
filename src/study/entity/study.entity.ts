import { ApiProperty } from "@nestjs/swagger";
import { State, Study } from "@prisma/client";

export class StudyEntity implements Study {

    @ApiProperty({ type: Number, readOnly: true })
    id: number;

    @ApiProperty({ type: String })
    name: string;

    @ApiProperty({ type: String, nullable: true })
    paperUrl: string | null;

    @ApiProperty({ type: Number })
    researchCenterId: number;

    @ApiProperty({ type: Number })
    patientCurrent: number;

    @ApiProperty({ type: Number })
    patientMax: number;

    @ApiProperty({ enum: State })
    state: State;

    @ApiProperty({ type: String, nullable: true })
    notes: string | null;

    @ApiProperty({ type: Date })
    createdAt: Date;

    @ApiProperty({ type: Date })
    updatedAt: Date;
}