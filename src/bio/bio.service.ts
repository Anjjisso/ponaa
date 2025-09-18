// src/bio/bio.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BioService {
    constructor(private prisma: PrismaService) { }

    // ===============================
    // BIO GURU
    // ===============================
    async getGuruBio(id_guru: number) {
        const guru = await this.prisma.guru.findUnique({
            where: { id_guru },
            include: {
                user: { select: { id_user: true, email: true, role: true } },
            },
        });

        if (!guru) throw new NotFoundException('Guru tidak ditemukan');

        return {
            id_guru: guru.id_guru,
            nama: guru.nama,
            nip: guru.nip,
            email: guru.user?.email,
            role: guru.user?.role,
        };
    }

    // ===============================
    // BIO SISWA + TOTAL POIN
    // ===============================
    async getSiswaBio(id_siswa: number) {
        const siswa = await this.prisma.siswa.findUnique({
            where: { id_siswa },
            include: {
                user: { select: { id_user: true, email: true, role: true } },
                poins: { select: { jumlah_poin: true } },
            },
        });

        if (!siswa) throw new NotFoundException('Siswa tidak ditemukan');

        const totalPoin = siswa.poins.reduce((sum, p) => sum + p.jumlah_poin, 0);

        return {
            id_siswa: siswa.id_siswa,
            nama: siswa.nama,
            nisn: siswa.nisn,
            kelas: siswa.kelas,
            email: siswa.user?.email,
            role: siswa.user?.role,
            totalPoin,
        };
    }
}
