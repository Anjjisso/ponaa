import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateKategoriPoinDto {
    @IsString()
    @IsNotEmpty()
    nama_kategori: string;

    @IsInt()
    @IsNotEmpty()
    nilai_default: number;
}
