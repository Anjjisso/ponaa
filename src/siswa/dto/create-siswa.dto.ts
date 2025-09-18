import { IsString, IsInt } from 'class-validator';

export class CreateSiswaDto {
    @IsString()
    nama: string;

    @IsInt()
    nisn: number;

    @IsInt()
    id_user: number;

    @IsString()
    kelas: string;
}
