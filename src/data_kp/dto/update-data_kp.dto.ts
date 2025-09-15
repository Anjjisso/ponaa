import { PartialType } from '@nestjs/mapped-types';
import { CreateKategoriPoinDto } from './create-data_kp.dto';

export class UpdateKategoriPoinDto extends PartialType(CreateKategoriPoinDto) { }
