import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export enum JenisKelamin {
    LAKI_LAKI = 'LAKI_LAKI',
    PEREMPUAN = 'PEREMPUAN',
}

export class CreateGuruDto {
    @IsString()
    @IsNotEmpty()
    nama: string;

    @IsNumber()
    nip: number;

    @IsEnum(JenisKelamin, {
        message: 'jenis_kelamin harus LAKI_LAKI atau PEREMPUAN',
    })
    jenis_kelamin: JenisKelamin;

    @IsNumber()
    @IsOptional()
    user_id?: number; // opsional kalau backend mau connect ke user yang sudah ada
}
