import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGuruDto } from './dto/create-guru.dto';
import { UpdateGuruDto } from './dto/update-guru.dto';

@Injectable()
export class GuruService {
    constructor(private prisma: PrismaService) { }

    async create(dto: CreateGuruDto) {
        // cari user role GURU yang belum dipakai
        let user = await this.prisma.user.findFirst({
            where: { role: 'GURU', guru: null },
        });

        // kalau tidak ada, buat user baru otomatis
        if (!user) {
            user = await this.prisma.user.create({
                data: {
                    email: `${dto.nip}@guru.com`, // bisa diganti sesuai kebutuhan
                    password: 'password123',      // default password (hash sebaiknya)
                    role: 'GURU',
                },
            });
        }

        return this.prisma.guru.create({
            data: {
                nama: dto.nama,
                nip: dto.nip,
                jenis_kelamin: dto.jenis_kelamin,
                user: { connect: { id_user: user.id_user } },
            },
            include: { user: true },
        });
    }

    findAll() {
        return this.prisma.guru.findMany({ include: { user: true } });
    }

    findOne(id_guru: number) {
        return this.prisma.guru.findUnique({
            where: { id_guru },
            include: { user: true },
        });
    }

    update(id_guru: number, dto: UpdateGuruDto) {
        return this.prisma.guru.update({
            where: { id_guru },
            data: dto,
        });
    }

    remove(id_guru: number) {
        return this.prisma.guru.delete({ where: { id_guru } });
    }
}
