import { IsInt, IsNotEmpty } from 'class-validator';

export class CreatePoinDto {
    @IsInt()
    @IsNotEmpty()
    user_siswa: number;

    @IsInt()
    @IsNotEmpty()
    kategori_id: number;
}
