import { PartialType } from '@nestjs/mapped-types';
import { CreateGuruDto } from './create-guru.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateGuruDto extends PartialType(CreateGuruDto) {

    @ApiProperty({ example: 'Ahmad Fauzi' })
    nama?: string;

    @ApiProperty({ example: 123456789 })
    nip?: number;

    @ApiProperty({ example: 1, description: 'ID user' })
    user_id?: number;
}