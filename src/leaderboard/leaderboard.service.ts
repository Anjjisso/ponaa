// src/leaderboard/leaderboard.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LeaderboardService {
    constructor(private prisma: PrismaService) { }

    /**
     * Ambil semua siswa beserta total poin mereka,
     * urut dari poin tertinggi
     */
    async getLeaderboard(limit?: number) {
        const siswaList = await this.prisma.siswa.findMany({
            include: { poins: true }, // relasi ke tabel Poin
        });

        const leaderboard = siswaList
            .map((s) => ({
                id_siswa: s.id_siswa,
                nama: s.nama,
                kelas: s.kelas,
                totalPoin: s.poins.reduce((acc, p) => acc + p.jumlah_poin, 0),
            }))
            .sort((a, b) => b.totalPoin - a.totalPoin);

        return limit ? leaderboard.slice(0, limit) : leaderboard;
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
