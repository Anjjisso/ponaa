import { Controller, Get, Param } from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';

@Controller('leaderboard')
export class LeaderboardController {
    constructor(private readonly leaderboardService: LeaderboardService) { }

    @Get()
    getLeaderboard() {
        return this.leaderboardService.getLeaderboard();
    }

    @Get(':id')
    getSiswa(@Param('id') id: string) {
        return this.leaderboardService.getSiswaWithPoint(Number(id));
    }
}
