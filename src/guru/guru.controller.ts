import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { GuruService } from './guru.service';
import { CreateGuruDto } from './dto/create-guru.dto';
import { UpdateGuruDto } from './dto/update-guru.dto';
import { Roles } from 'src/auth/roles.detector';
import { RolesGuard } from 'src/auth/roles.guard';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('guru')
@ApiBearerAuth('JWT-auth')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('guru')
export class GuruController {
    constructor(private readonly guruService: GuruService) { }

    @Post()
    @Roles('ADMIN') // hanya admin
    create(@Body() createGuruDto: CreateGuruDto) {
        return this.guruService.create(createGuruDto);
    }

    @Get()
    @Roles('ADMIN') // hanya admin
    findAll() {
        return this.guruService.findAll();
    }

    @Get(':id_guru')
    @Roles('ADMIN') // hanya admin
    findOne(@Param('id_guru') id_guru: string) {
        return this.guruService.findOne(+id_guru);
    }

    @Patch(':id_guru')
    @Roles('ADMIN') // hanya admin
    update(@Param('id_guru') id_guru: string, @Body() updateGuruDto: UpdateGuruDto) {
        return this.guruService.update(+id_guru, updateGuruDto);
    }

    @Delete(':id_guru')
    @Roles('ADMIN') // hanya admin
    remove(@Param('id_guru') id_guru: string) {
        return this.guruService.remove(+id_guru);
    }
}
