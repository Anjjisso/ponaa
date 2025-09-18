import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
    @ApiProperty({ example: 'fitri@gmail.com' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: '112233' })
    @IsString()
    @MinLength(6)
    password: string;
}
