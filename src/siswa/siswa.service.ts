import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSiswaDto } from './dto/create-siswa.dto';
import { UpdateSiswaDto } from './dto/update-siswa.dto';

@Injectable()
export class SiswaService {
    constructor(private prisma: PrismaService) { }

    create(dto: CreateSiswaDto) {
        return this.prisma.siswa.create({
            data: dto,
        });
    }

    findAll() {
        return this.prisma.siswa.findMany({
            include: { user: true, poins: true },
        });
    }

    findOne(id: number) {
        return this.prisma.siswa.findUnique({
            where: { id_siswa: id },
            include: { user: true, poins: true },
        });
    }

    update(id: number, dto: UpdateSiswaDto) {
        return this.prisma.siswa.update({
            where: { id_siswa: id },
            data: dto,
        });
    }

    remove(id: number) {
        return this.prisma.siswa.delete({
            where: { id_siswa: id },
        });
    }
}
