import { Module } from '@nestjs/common';
import { DataKpService } from './data_kp.service';
import { DataKpController } from './data_kp.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [DataKpController],
  providers: [DataKpService, PrismaService],
})
export class DataKpModule { }
