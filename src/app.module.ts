import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { GuruService } from './guru/guru.service';
import { GuruModule } from './guru/guru.module';
import { DataKpService } from './data_kp/data_kp.service';
import { DataKpModule } from './data_kp/data_kp.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, GuruModule, DataKpModule],
  providers: [GuruService, DataKpService],
})
export class AppModule { }
