// src/bio/bio.controller.ts
import {
    Controller,
    Get,
    Req,
    UseGuards,
    ForbiddenException,
    Patch,
    Body
} from '@nestjs/common';
import { BioService } from './bio.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('bio')
@ApiBearerAuth('JWT-auth')
@Controller('bio')
@UseGuards(JwtAuthGuard)
export class BioController {
    constructor(private readonly bioService: BioService) { }

    // Guru melihat bio miliknya
    @Get('GURU')
    async getGuruBio(@Req() req) {
        const { id_guru } = req.user;
        if (!id_guru) {
            throw new ForbiddenException('Token tidak memiliki id_guru');
        }
        return this.bioService.getGuruBio(id_guru);
    }

    @Patch('GURU')
async updateGuruBio(@Req() req, @Body() body: { nama?: string; nip?: number }) {
  const { id_guru } = req.user;
  return this.bioService.updateGuruBio(id_guru, body);
}

    // Siswa melihat bio miliknya
    @Get('SISWA')
    async getSiswaBio(@Req() req) {
        const { id_siswa } = req.user;
        if (!id_siswa) {
            throw new ForbiddenException('Token tidak memiliki id_siswa');
        }
        return this.bioService.getSiswaBio(id_siswa);
    }
}
