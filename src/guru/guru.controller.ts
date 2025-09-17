import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GuruService } from './guru.service';
import { CreateGuruDto } from './dto/create-guru.dto';
import { UpdateGuruDto } from './dto/update-guru.dto';
import { Roles } from 'src/auth/roles.detector';

@Controller('guru')
export class GuruController {
    constructor(private readonly guruService: GuruService) { }

    @Post()
    create(@Body() createGuruDto: CreateGuruDto) {
        return this.guruService.create(createGuruDto);
    }

    @Get()
    findAll() {
        return this.guruService.findAll();
    }

    @Get(':id_guru')
    findOne(@Param('id_guru') id_guru: string) {
        return this.guruService.findOne(+id_guru);
    }

    @Patch(':id_guru')
    update(@Param('id_guru') id_guru: string, @Body() updateGuruDto: UpdateGuruDto) {
        return this.guruService.update(+id_guru, updateGuruDto);
    }

    @Delete(':id_guru')
    remove(@Param('id_guru') id_guru: string) {
        return this.guruService.remove(+id_guru);
    }
}
