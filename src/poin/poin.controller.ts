import { Controller, Post, Get, Patch, Delete, Param, Body, UseGuards, Req } from '@nestjs/common';
import { PoinService } from './poin.service';
import { CreatePoinDto } from './dto/create-poin.dto';
import { UpdatePoinDto } from './dto/update-poin.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.detector';

@Controller('poin')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PoinController {
    constructor(private readonly poinService: PoinService) { }

    @Roles('GURU')
    @Post()
    create(@Body() dto: CreatePoinDto) {
        return this.poinService.create(dto);
    }

    @Roles('GURU')
    @Get()
    findAll() {
        return this.poinService.findAll();
    }

    @Roles('SISWA')
    @Get('me')
    findMine(@Req() req) {
        return this.poinService.findBySiswa(req.user.id_siswa);
    }

    @Roles('GURU')
    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdatePoinDto) {
        return this.poinService.update(+id, dto);
    }

    @Roles('GURU')
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.poinService.remove(+id);
    }
}
