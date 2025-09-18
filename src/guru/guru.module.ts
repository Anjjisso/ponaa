import { Module } from '@nestjs/common';
import { GuruService } from './guru.service';
import { GuruController } from './guru.controller';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [AuthModule, PrismaModule], // PrismaService tersedia untuk GuruService
  controllers: [GuruController],
  providers: [GuruService],
})
export class GuruModule { }
