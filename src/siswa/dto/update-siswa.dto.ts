import { PartialType } from '@nestjs/mapped-types';
import { CreateSiswaDto } from './create-siswa.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSiswaDto extends PartialType(CreateSiswaDto) {

    @ApiProperty({ example: 'Budi Santoso' })
    nama?: string;

    @ApiProperty({ example: 1234567890 })
    nisn?: number;

    @ApiProperty({ example: 1, description: 'ID user siswa' })
    id_user?: number;

    @ApiProperty({ example: 'XII RPL' })
    kelas?: string;
}
