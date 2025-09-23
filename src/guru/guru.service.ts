import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGuruDto } from './dto/create-guru.dto';
import { UpdateGuruDto } from './dto/update-guru.dto';

@Injectable()
export class GuruService {
    constructor(private prisma: PrismaService) { }

    create(data: CreateGuruDto) {
        return this.prisma.guru.create({
            data: {
                nama: data.nama,
                nip: data.nip,
                user: {
                    connect: { id_user: data.user_id },
                },
            },
        });
    }



    findAll() {
        return this.prisma.guru.findMany({
            include: { user: true }, // kalau ada relasi ke User
        });
    }

    findOne(id_guru: number) {
        return this.prisma.guru.findUnique({
            where: { id_guru },
            include: { user: true },
        });
    }

    update(id_guru: number, data: UpdateGuruDto) {
        return this.prisma.guru.update({
            where: { id_guru },
            data,
        });
    }

    remove(id_guru: number) {
        return this.prisma.guru.delete({ where: { id_guru } });
    }
}
