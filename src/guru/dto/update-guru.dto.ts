import { PartialType } from '@nestjs/mapped-types';
import { CreateGuruDto } from './create-guru.dto';

export class UpdateGuruDto extends PartialType(CreateGuruDto) { }