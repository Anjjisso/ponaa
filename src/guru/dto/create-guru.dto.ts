import { IsNotEmpty, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGuruDto {
    @ApiProperty({ example: 'Ahmad Fauzi' })
    @IsNotEmpty()
    nama: string;

    @ApiProperty({ example: 123456789 })
    @IsNotEmpty()
    @IsInt()
    nip: number;

    @ApiProperty({ example: 1, description: 'ID user' })
    @IsNotEmpty()
    @IsInt()
    user_id: number;

    @ApiProperty({ example: 'LAKI_LAKI', enum: ['LAKI_LAKI', 'PEREMPUAN'] })
    @IsNotEmpty()
    jenis_kelamin: 'LAKI_LAKI' | 'PEREMPUAN';
}
