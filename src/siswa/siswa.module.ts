// siswa.module.ts
import { Module } from '@nestjs/common';
import { SiswaService } from './siswa.service';
import { SiswaController } from './siswa.controller';
import { PrismaModule } from 'src/prisma/prisma.module'; // path sesuaikan

@Module({
  imports: [PrismaModule],
  controllers: [SiswaController],
  providers: [SiswaService],
})
export class SiswaModule { }