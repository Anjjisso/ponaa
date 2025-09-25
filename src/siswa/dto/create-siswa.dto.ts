import { IsString, IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSiswaDto {

    @ApiProperty({ example: 'Budi Santoso' })
    @IsString()
    nama: string;

    @ApiProperty({ example: 1234567890 })
    @IsInt()
    nisn: number;

    @ApiProperty({ example: 1, description: 'ID user siswa' })
    @IsInt()
    id_user: number;

    @ApiProperty({ example: 'XII RPL' })
    @IsString()
    kelas: string;

    @ApiProperty({ example: 'LAKI_LAKI', enum: ['LAKI_LAKI', 'PEREMPUAN'] })
    @IsNotEmpty()
    jenis_kelamin: 'LAKI_LAKI' | 'PEREMPUAN';
}
