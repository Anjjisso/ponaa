import { PartialType } from '@nestjs/mapped-types';
import { CreateGuruDto, JenisKelamin } from './create-guru.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateGuruDto extends PartialType(CreateGuruDto) {
    @ApiPropertyOptional({ example: 'Ahmad Fauzi' })
    nama?: string;

    @ApiPropertyOptional({ example: 123456789 })
    nip?: number;

    @ApiPropertyOptional({ example: 'LAKI_LAKI', enum: JenisKelamin })
    jenis_kelamin?: JenisKelamin;
}
