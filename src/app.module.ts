import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { GuruService } from './guru/guru.service';
import { GuruModule } from './guru/guru.module';
import { DataKpService } from './data_kp/data_kp.service';
import { DataKpModule } from './data_kp/data_kp.module';
import { PoinService } from './poin/poin.service';
import { PoinModule } from './poin/poin.module';
import { BioModule } from './bio/bio.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { APP_GUARD } from '@nestjs/core';
import { SiswaModule } from './siswa/siswa.module';
import { PoinStatistikService } from './poin-statistik/poin-statistik.service';
import { PoinStatistikModule } from './poin-statistik/poin-statistik.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, GuruModule, DataKpModule, PoinModule, BioModule, LeaderboardModule, SiswaModule, PoinStatistikModule],
  providers: [GuruService, DataKpService, PoinService, PoinStatistikService
  ],
})
export class AppModule { }
