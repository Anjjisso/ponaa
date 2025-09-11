import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateUsersDto {
    @IsNotEmpty()
    @IsString()
    nama: string;

    @IsNotEmpty()
    @IsInt()
    nip: number;

    @IsNotEmpty()
    @IsInt()
    user_id: number;

}