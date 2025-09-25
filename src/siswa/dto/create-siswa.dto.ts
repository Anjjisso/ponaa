import { IsString, IsInt, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { JenisKelamin } from 'src/guru/dto/create-guru.dto'; // biar enum-nya konsisten

export class CreateSiswaDto {
    @ApiProperty({ example: 'Budi Santoso' })
    @IsString()
    @IsNotEmpty()
    nama: string;

    @ApiProperty({ example: 1234567890 })
    @IsInt()
    @IsNotEmpty()
    nisn: number;

    @ApiProperty({ example: 'XII RPL' })
    @IsString()
    @IsNotEmpty()
    kelas: string;

    @ApiProperty({ example: 'LAKI_LAKI', enum: JenisKelamin })
    @IsEnum(JenisKelamin, { message: 'jenis_kelamin harus LAKI_LAKI atau PEREMPUAN' })
    jenis_kelamin: JenisKelamin;
}
