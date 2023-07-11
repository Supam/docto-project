import { ApiProperty } from "@nestjs/swagger";
import { Patient, ResearchCenter } from "@prisma/client";

export class LaboEntity implements ResearchCenter {
    @ApiProperty({ type: Number, readOnly: true })
    id: number;

    @ApiProperty({ type: String, isArray: true })
    addresses: string[];

    @ApiProperty({ type: String, isArray: true })
    emails: string[];

    @ApiProperty({ type: String })
    name: string;

    @ApiProperty({ type: String, isArray: true })
    phoneNumbers: string[];

    @ApiProperty({ type: String, nullable: true })
    notes: string | null;

    @ApiProperty({ type: Date })
    createdAt: Date;

    @ApiProperty({ type: Date })
    updatedAt: Date;


}
