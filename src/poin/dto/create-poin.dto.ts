import { IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePoinDto {

    @ApiProperty({ example: 1, description: 'ID user siswa' })
    @IsInt()
    @IsNotEmpty()
    user_siswa: number;

    @ApiProperty({ example: 1, description: 'ID kategori poin' })
    @IsInt()
    @IsNotEmpty()
    kategori_id: number;
}
