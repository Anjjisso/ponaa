import { Module } from '@nestjs/common';
import { PoinService } from './poin.service';
import { PoinController } from './poin.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PoinController],
  providers: [PoinService, PrismaService],
  exports: [PoinService],
})
export class PoinModule { }
