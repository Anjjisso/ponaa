import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Patch,
    Delete,
    ParseIntPipe,
    UseGuards,
} from '@nestjs/common';
import { SiswaService } from './siswa.service';
import { CreateSiswaDto } from './dto/create-siswa.dto';
import { UpdateSiswaDto } from './dto/update-siswa.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.detector';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('siswa')
@ApiBearerAuth('JWT-auth')
@Controller('siswa')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class SiswaController {
    constructor(private readonly siswaService: SiswaService) { }

    @Post()
    @Roles('ADMIN', 'GURU')
    create(@Body() dto: CreateSiswaDto) {
        return this.siswaService.create(dto);
    }

    @Get()
    @Roles('ADMIN', 'GURU')
    findAll() {
        return this.siswaService.findAll();
    }

    @Get(':id')
    @Roles('ADMIN', 'GURU')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.siswaService.findOne(id);
    }

    @Patch(':id')
    @Roles('ADMIN', 'GURU')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateSiswaDto,
    ) {
        return this.siswaService.update(id, dto);
    }

    @Delete(':id')
    @Roles('ADMIN', 'GURU')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.siswaService.remove(id);
    }
}
