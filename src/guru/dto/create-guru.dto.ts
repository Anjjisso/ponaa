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
}
