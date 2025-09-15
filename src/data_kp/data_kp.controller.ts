import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { DataKpService } from './data_kp.service';
import { CreateKategoriPoinDto } from './dto/create-data_kp.dto';
import { UpdateKategoriPoinDto } from './dto/update-data_kp.dto';

@Controller('kategori-poin')
export class DataKpController {
    constructor(private readonly service: DataKpService) { }

    @Post()
    create(@Body() dto: CreateKategoriPoinDto) {
        return this.service.create(dto);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateKategoriPoinDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.service.remove(id);
    }
}
