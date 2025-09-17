import { PartialType } from '@nestjs/mapped-types';
import { CreatePoinDto } from './create-poin.dto';

export class UpdatePoinDto extends PartialType(CreatePoinDto) {
    jumlah_poin?: number;
}