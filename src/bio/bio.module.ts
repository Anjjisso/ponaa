import { Module } from '@nestjs/common';
import { BioController } from './bio.controller';
import { BioService } from './bio.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [BioController],
  providers: [BioService, PrismaService],
})
export class BioModule { }
