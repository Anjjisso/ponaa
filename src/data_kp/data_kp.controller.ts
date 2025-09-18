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
import { DataKpService } from './data_kp.service';
import { CreateKategoriPoinDto } from './dto/create-data_kp.dto';
import { UpdateKategoriPoinDto } from './dto/update-data_kp.dto';
import { Roles } from 'src/auth/roles.detector';
import { RolesGuard } from 'src/auth/roles.guard';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('data-kp')
@ApiBearerAuth('JWT-auth')
@Controller('kategori-poin')
@UseGuards(AuthGuard('jwt'), RolesGuard) // JWT auth + role guard
export class DataKpController {
    constructor(private readonly service: DataKpService) { }

    @Post()
    @Roles('ADMIN', 'GURU')
    create(@Body() dto: CreateKategoriPoinDto) {
        return this.service.create(dto);
    }

    @Get()
    @Roles('ADMIN', 'GURU')
    findAll() {
        return this.service.findAll();
    }

    @Get(':id')
    @Roles('ADMIN', 'GURU')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Patch(':id')
    @Roles('ADMIN', 'GURU')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateKategoriPoinDto,
    ) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @Roles('ADMIN', 'GURU')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.service.remove(id);
    }
}
