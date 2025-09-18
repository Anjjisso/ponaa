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
    UploadedFile,
    UseInterceptors,
    Res,
    ParseIntPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import type { Response } from 'express';
import type { Express } from 'express';
import { PoinService } from './poin.service';
import { CreatePoinDto } from './dto/create-poin.dto';
import { UpdatePoinDto } from './dto/update-poin.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.detector';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('poin')
@ApiBearerAuth('JWT-auth')
@Controller('poin')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PoinController {
    constructor(private readonly poinService: PoinService) { }

    // CREATE
    @Roles('GURU')
    @Post()
    create(@Body() dto: CreatePoinDto) {
        return this.poinService.create(dto);
    }

    // GET all
    @Roles('GURU')
    @Get()
    findAll() {
        return this.poinService.findAll();
    }

    // GET poin milik siswa login
    @Roles('SISWA')
    @Get('me')
    findMine(@Req() req) {
        return this.poinService.findBySiswa(req.user.id_siswa);
    }

    // UPDATE
    @Roles('GURU')
    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdatePoinDto) {
        return this.poinService.update(id, dto);
    }

    // DELETE
    @Roles('GURU')
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.poinService.remove(id);
    }

    // UPLOAD FOTO
    @Roles('GURU')
    @Post('upload/:id')
    @UseInterceptors(
        FileInterceptor('file', {
            limits: { fileSize: 2 * 1024 * 1024 }, // max 2MB
            fileFilter: (req, file, cb) => {
                if (!file.mimetype.startsWith('image/')) {
                    return cb(new Error('Hanya file gambar yang diizinkan'), false);
                }
                cb(null, true);
            },
        }),
    )
    uploadFoto(
        @Param('id', ParseIntPipe) id: number,
        @UploadedFile() file: Express.Multer.File,
    ) {
        return this.poinService.uploadFoto(id, file.buffer);
    }

    // GET FOTO
    @Roles('GURU', 'SISWA')
    @Get('foto/:id')
    async getFoto(
        @Param('id', ParseIntPipe) id: number,
        @Res() res: Response,
    ) {
        const foto = await this.poinService.getFoto(id);
        res.setHeader('Content-Type', 'image/png');
        res.send(foto);
    }

    @Get('history/:id_siswa')
    getHistory(@Param('id_siswa', ParseIntPipe) id_siswa: number) {
        return this.poinService.findBySiswa(id_siswa);
    }
}
