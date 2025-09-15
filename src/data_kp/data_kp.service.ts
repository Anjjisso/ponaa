import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateKategoriPoinDto } from './dto/create-data_kp.dto';
import { UpdateKategoriPoinDto } from './dto/update-data_kp.dto';
@Injectable()
export class DataKpService {
    constructor(private prisma: PrismaService) { }

    create(dto: CreateKategoriPoinDto) {
        return this.prisma.kategori_Poin.create({ data: dto });
    }

    findAll() {
        return this.prisma.kategori_Poin.findMany();
    }

    findOne(id: number) {
        return this.prisma.kategori_Poin.findUnique({ where: { id_kategori: id } });
    }

    update(id: number, dto: UpdateKategoriPoinDto) {
        return this.prisma.kategori_Poin.update({
            where: { id_kategori: id },
            data: dto,
        });
    }

    remove(id: number) {
        return this.prisma.kategori_Poin.delete({ where: { id_kategori: id } });
    }
}
