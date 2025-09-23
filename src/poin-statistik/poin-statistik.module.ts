// src/poin-statistik/poin-statistik.module.ts
import { Module } from '@nestjs/common';
import { PoinStatistikController } from './poin-statistik.controller';
import { PoinStatistikService } from './poin-statistik.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PoinStatistikController],
  providers: [PoinStatistikService, PrismaService],
})
export class PoinStatistikModule { }
