import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
    @ApiProperty({ example: 'ibnu@gmail.com' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: '550077' })
    @IsString()
    @MinLength(6)
    password: string;
}
