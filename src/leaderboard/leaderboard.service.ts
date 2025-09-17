import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LeaderboardService {
    constructor(private prisma: PrismaService) { }

    /**
     * Ambil semua siswa beserta total poin mereka
     */
    async getLeaderboard() {
        const siswaList = await this.prisma.siswa.findMany({
            include: {
                poins: true, // sesuai dengan nama di schema
            },
        });

        return siswaList
            .map((s) => ({
                id_siswa: s.id_siswa,
                nama: s.nama,
                kelas: s.kelas,
                totalPoin: s.poins.reduce((acc, p) => acc + p.jumlah_poin, 0),
            }))
            .sort((a, b) => b.totalPoin - a.totalPoin); // urut poin terbesar
    }

    /**
     * Ambil detail 1 siswa + total poin
     */
    async getSiswaWithPoint(id_siswa: number) {
        const siswa = await this.prisma.siswa.findUnique({
            where: { id_siswa },
            include: { poins: true },
        });

        if (!siswa) return null;

        return {
            id_siswa: siswa.id_siswa,
            nama: siswa.nama,
            kelas: siswa.kelas,
            totalPoin: siswa.poins.reduce((acc, p) => acc + p.jumlah_poin, 0),
        };
    }
}
