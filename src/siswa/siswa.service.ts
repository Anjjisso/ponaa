import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSiswaDto } from './dto/create-siswa.dto';
import { UpdateSiswaDto } from './dto/update-siswa.dto';

@Injectable()
export class SiswaService {
    constructor(private prisma: PrismaService) { }

    async create(dto: CreateSiswaDto) {
        // cari user role SISWA yang belum dipakai
        let user = await this.prisma.user.findFirst({
            where: { role: 'SISWA', siswa: null },
        });

        // kalau tidak ada, buat user baru otomatis
        if (!user) {
            user = await this.prisma.user.create({
                data: {
                    email: `${dto.nisn}@siswa.com`, // bisa diganti sesuai kebutuhan
                    password: 'password123',        // default password (hash sebaiknya)
                    role: 'SISWA',
                },
            });
        }

        return this.prisma.siswa.create({
            data: {
                nama: dto.nama,
                nisn: dto.nisn,
                kelas: dto.kelas,
                jenis_kelamin: dto.jenis_kelamin,
                user: { connect: { id_user: user.id_user } },
            },
            include: { user: true, poins: true },
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
        return this.prisma.siswa.delete({ where: { id_siswa: id } });
    }
}
