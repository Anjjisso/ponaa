// src/leaderboard/leaderboard.controller.ts
import {
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Query,
    UseGuards,
} from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.detector';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('leaderboard')
@ApiBearerAuth('JWT-auth')
@Controller('leaderboard')
@UseGuards(JwtAuthGuard, RolesGuard) // proteksi seluruh route
export class LeaderboardController {
    constructor(private readonly leaderboardService: LeaderboardService) { }

    /**
     * Hanya ADMIN & GURU yang bisa melihat daftar leaderboard
     */
    @Roles('ADMIN', 'GURU')
    @Get()
    async getAll(@Query('limit') limit?: string) {
        const lmt = limit ? parseInt(limit, 10) : undefined;
        return this.leaderboardService.getLeaderboard(lmt);
    }

    /**
     * Detail 1 siswa + total poin
     */
    @Roles('ADMIN', 'GURU')
    @Get(':id')
    async getDetail(@Param('id', ParseIntPipe) id: number) {
        return this.leaderboardService.getSiswaWithPoint(id);
    }
}
