import { IsInt, IsOptional } from 'class-validator';

export class UpdatePoinDto {
    @IsOptional()
    @IsInt()
    user_siswa?: number;

    @IsOptional()
    @IsInt()
    kategori_id?: number;
}
