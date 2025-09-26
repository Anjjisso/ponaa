import { IsString, IsInt, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { JenisKelamin } from 'src/guru/dto/create-guru.dto'; // biar enum-nya konsisten
import { Jurusan, Kelas } from 'generated/prisma';

export class CreateSiswaDto {
    @ApiProperty({ example: 'Budi Santoso' })
    @IsString()
    @IsNotEmpty()
    nama: string;

    @ApiProperty({ example: 1234567890 })
    @IsInt()
    @IsNotEmpty()
    nisn: number;

    @ApiProperty({ example: 'XII', enum: Kelas })
    @IsEnum(Kelas, { message: 'kelas harus X, XI, atau XII' })
    kelas: Kelas;

    @ApiProperty({ example: 'RPL', enum: Jurusan })
    @IsEnum(Jurusan, { message: 'jurusan harus RPL, TKJ, atau DKV' })
    jurusan: Jurusan;

    @ApiProperty({ example: 'LAKI_LAKI', enum: JenisKelamin })
    @IsEnum(JenisKelamin, { message: 'jenis_kelamin harus LAKI_LAKI atau PEREMPUAN' })
    jenis_kelamin: JenisKelamin;
}
