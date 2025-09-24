import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-users.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @ApiProperty({ example: 'Guru@gmail.com' })
    email?: string;

    @ApiProperty({ example: 'guru123' })
    password?: string;

    @ApiProperty({ example: 'GURU', description: 'Role user, bisa GURU atau SISWA' })
    role?: 'GURU' | 'SISWA';
}
