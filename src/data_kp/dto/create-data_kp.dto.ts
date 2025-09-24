import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateKategoriPoinDto {
    @ApiProperty({ example: 'Rajin mengikuti kelas' })
    @IsString()
    @IsNotEmpty()
    nama_kategori: string;


    @ApiProperty({ example: 15 })
    @IsInt()
    @IsNotEmpty()
    nilai_default: number;
}
