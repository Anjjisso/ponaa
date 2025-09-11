import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsEnum(['GURU', 'SISWA'], {
        message: 'role harus GURU atau SISWA',
    })
    role: 'GURU' | 'SISWA';
}
