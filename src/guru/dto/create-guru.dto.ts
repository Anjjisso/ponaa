import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateGuruDto {
    @IsNotEmpty()
    nama: string;

    @IsNotEmpty()
    @IsInt()
    nip: number;

    @IsNotEmpty()
    @IsInt()
    user_id: number;
}
