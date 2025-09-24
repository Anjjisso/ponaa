import { IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePoinDto {

    @ApiProperty({ example: 1, description: 'ID user siswa' })
    @IsOptional()
    @IsInt()
    user_siswa?: number;

    @ApiProperty({ example: 1, description: 'ID kategori poin' })
    @IsOptional()
    @IsInt()
    kategori_id?: number;
}
