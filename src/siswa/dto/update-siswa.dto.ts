import { PartialType } from '@nestjs/mapped-types';
import { CreateSiswaDto } from './create-siswa.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { JenisKelamin } from 'src/guru/dto/create-guru.dto';
import { Jurusan, Kelas } from 'generated/prisma';

export class UpdateSiswaDto extends PartialType(CreateSiswaDto) {
    @ApiPropertyOptional({ example: 'Budi Santoso' })
    nama?: string;

    @ApiPropertyOptional({ example: 1234567890 })
    nisn?: number;

    @ApiPropertyOptional({ example: 'XII', enum: Kelas })
    kelas?: Kelas;

    @ApiPropertyOptional({ example: 'RPL', enum: Jurusan })
    jurusan?: Jurusan;

    @ApiPropertyOptional({ example: 'LAKI_LAKI', enum: JenisKelamin })
    jenis_kelamin?: JenisKelamin;
}
