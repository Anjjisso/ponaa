import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'admin@gmail.com' })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'admin123' })
    @IsNotEmpty()
    password: string;

    @ApiProperty({ example: 'ADMIN', description: 'Role user, bisa GURU atau SISWA' })
    @IsNotEmpty()
    @IsEnum(['GURU', 'SISWA'], {
        message: 'role harus GURU atau SISWA',
    })
    role: 'GURU' | 'SISWA';
}
