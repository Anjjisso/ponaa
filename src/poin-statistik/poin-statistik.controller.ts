// src/poin-statistik/poin-statistik.controller.ts
import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { PoinStatistikService } from './poin-statistik.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.detector';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('poin-statistik')
@ApiBearerAuth('JWT-auth')
@Controller('poin-statistik')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PoinStatistikController {
    constructor(private readonly service: PoinStatistikService) { }

    @Roles('GURU', 'ADMIN')
    @Get('bulanan/:tahun/:bulan')
    getBulanan(
        @Param('tahun', ParseIntPipe) tahun: number,
        @Param('bulan', ParseIntPipe) bulan: number,
    ) {
        return this.service.getStatistikBulanan(bulan, tahun);
    }

    @Roles('GURU', 'ADMIN')
    @Get('harian/:tahun/:bulan/:tanggal')
    getHarian(
        @Param('tahun', ParseIntPipe) tahun: number,
        @Param('bulan', ParseIntPipe) bulan: number,
        @Param('tanggal', ParseIntPipe) tanggal: number,
    ) {
        return this.service.getStatistikHarian(tahun, bulan, tanggal);
    }

}
