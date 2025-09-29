import {
    Controller,
    Post,
    Get,
    Patch,
    Delete,
    Param,
    Body,
    Req,
    UseGuards,
    NotFoundException,
    Res,
    ParseIntPipe,
    UseInterceptors,
    UploadedFile,
} from '@nestjs/common';
import type { Response } from 'express';
import { PoinService } from './poin.service';
import { CreatePoinDto } from './dto/create-poin.dto';
import { UpdatePoinDto } from './dto/update-poin.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.detector';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('poin')
@ApiBearerAuth('JWT-auth')
@Controller('poin')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PoinController {
    constructor(private readonly poinService: PoinService) { }

    // ===========================
    // CREATE poin + upload foto
    // ===========================
    @Roles('GURU')
    @Post()
    @UseInterceptors(FileInterceptor('foto'))
    create(@Body() body: any, @UploadedFile() file?: Express.Multer.File) {
        const dto: CreatePoinDto = {
            user_siswa: Number(body.user_siswa),
            kategori_id: Number(body.kategori_id),
        };
        return this.poinService.create(dto, file?.buffer);
    }

    // ===========================
    // GET semua poin (hanya GURU)
    // ===========================
    @Roles('GURU')
    @Get()
    findAll() {
        return this.poinService.findAll();
    }

    // ===========================
    // GET poin milik siswa login
    // ===========================
    @Roles('SISWA')
    @Get('me')
    findMine(@Req() req) {
        return this.poinService.findBySiswa(req.user.id_siswa);
    }

    // ===========================
    // GET total poin siswa login
    // ===========================
    @Roles('SISWA')
    @Get('total/me')
    async getTotalMine(@Req() req) {
        return {
            total: await this.poinService.getTotalBySiswa(req.user.id_siswa),
        };
    }

    // ===========================
    // UPDATE poin (hanya GURU)
    // ===========================
    @Roles('GURU')
    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdatePoinDto,
    ) {
        return this.poinService.update(id, dto);
    }

    // ===========================
    // DELETE poin (hanya GURU)
    // ===========================
    @Roles('GURU')
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.poinService.remove(id);
    }

    // ===========================
    // GET FOTO poin
    // ===========================
    @Roles('GURU', 'SISWA')
    @Get(':id/foto')
    async getFoto(
        @Param('id', ParseIntPipe) id: number,
        @Res() res: Response,
    ) {
        const foto = await this.poinService.getFoto(id);
        if (!foto) throw new NotFoundException('Foto tidak ditemukan');
        res.setHeader('Content-Type', 'image/jpeg');
        res.send(foto);
    }

    @Roles('GURU', 'SISWA')
    @Get('total/:id')
    async getTotal(@Param('id') id: string) {
        const total = await this.poinService.getTotalBySiswa(+id);
        return { id_siswa: +id, totalPoin: total };
    }
}
