import { PartialType } from '@nestjs/mapped-types';
import { CreateKategoriPoinDto } from './create-data_kp.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateKategoriPoinDto extends PartialType(CreateKategoriPoinDto) {

    @ApiProperty({ example: 'Rajin mengikuti kelas' })
    nama_kategori?: string;

    @ApiProperty({ example: 15 })
    nilai_default?: number;
}
