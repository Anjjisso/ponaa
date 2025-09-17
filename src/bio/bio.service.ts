import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BioService {
    constructor(private prisma: PrismaService) { }

    /**
     * Ambil biodata guru by id_guru
     */
    async getGuruBio(id_guru: number) {
        return this.prisma.guru.findUnique({
            where: { id_guru },
            include: {
                user: { select: { id_user: true, email: true, role: true } },
            },
        });
    }

    /**
     * Ambil biodata siswa by id_siswa + total poin
     */
    async getSiswaBio(id_siswa: number) {
        const siswa = await this.prisma.siswa.findUnique({
            where: { id_siswa },
            include: {
                user: { select: { id_user: true, email: true, role: true } },
                poins: true,
            },
        });

        if (!siswa) return null;

        return {
            id_siswa: siswa.id_siswa,
            nama: siswa.nama,
            nisn: siswa.nisn,
            kelas: siswa.kelas,
            email: siswa.user.email,
            totalPoin: siswa.poins.reduce((sum, p) => sum + p.jumlah_poin, 0),
        };
    }
}
