import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { BioService } from './bio.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('bio')
@UseGuards(JwtAuthGuard)
export class BioController {
    constructor(private readonly bioService: BioService) { }

    // Guru melihat bio miliknya
    @Get('guru')
    async getGuruBio(@Req() req) {
        // pastikan token punya payload id_guru
        return this.bioService.getGuruBio(req.user.id_guru);
    }

    // Siswa melihat bio miliknya
    @Get('siswa')
    async getSiswaBio(@Req() req) {
        return this.bioService.getSiswaBio(req.user.id_siswa);
    }
}
