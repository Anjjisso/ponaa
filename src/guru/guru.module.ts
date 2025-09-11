import { Module } from '@nestjs/common';
import { GuruService } from './guru.service';
import { GuruController } from './guru.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [GuruController],
  providers: [GuruService, PrismaService],
})
export class GuruModule { }
