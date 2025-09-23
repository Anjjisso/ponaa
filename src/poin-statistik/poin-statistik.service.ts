// src/poin-statistik/poin-statistik.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { startOfMonth, endOfMonth, eachDayOfInterval, format } from 'date-fns';

@Injectable()
export class PoinStatistikService {
    constructor(private prisma: PrismaService) { }

    async getStatistikBulanan(bulan: number, tahun: number) {
        const awal = startOfMonth(new Date(tahun, bulan - 1));
        const akhir = endOfMonth(new Date(tahun, bulan - 1));

        // ambil semua kategori dari DB
        const semuaKategori = await this.prisma.kategori_Poin.findMany({
            select: { id_kategori: true, nama_kategori: true },
        });

        // generate semua tanggal dalam bulan
        const semuaTanggal = eachDayOfInterval({ start: awal, end: akhir }).map((d) =>
            format(d, 'yyyy-MM-dd'),
        );

        // ambil semua data poin di bulan tsb
        const data = await this.prisma.poin.findMany({
            where: { tanggal: { gte: awal, lte: akhir } },
            select: {
                jumlah_poin: true,
                tanggal: true,
                kategori: { select: { nama_kategori: true } },
            },
        });

        // susun hasil
        const result = semuaTanggal.map((tgl) => {
            const kategoriCount: Record<string, number> = {};

            // inisialisasi semua kategori = 0
            semuaKategori.forEach((k) => {
                kategoriCount[k.nama_kategori] = 0;
            });

            // ambil poin untuk tanggal ini
            const rows = data.filter(
                (p) => format(p.tanggal, 'yyyy-MM-dd') === tgl,
            );

            rows.forEach((row) => {
                const kategori = row.kategori?.nama_kategori || 'Lainnya';
                kategoriCount[kategori] =
                    (kategoriCount[kategori] || 0) + Number(row.jumlah_poin);
            });

            // hitung total semua kategori
            const total = Object.values(kategoriCount).reduce((a, b) => a + b, 0);
            kategoriCount['TOTAL'] = total;

            return {
                tanggal: tgl,
                kategori: kategoriCount,
            };
        });

        return result;
    }

    async getStatistikHarian(tahun: number, bulan: number, tanggal: number) {
        const tgl = new Date(tahun, bulan - 1, tanggal);
        const target = format(tgl, 'yyyy-MM-dd');

        // ambil semua kategori
        const semuaKategori = await this.prisma.kategori_Poin.findMany({
            select: { nama_kategori: true },
        });

        // ambil data poin di tanggal itu
        const data = await this.prisma.poin.findMany({
            where: {
                tanggal: {
                    gte: new Date(`${target}T00:00:00`),
                    lte: new Date(`${target}T23:59:59`),
                },
            },
            select: {
                jumlah_poin: true,
                kategori: { select: { nama_kategori: true } },
            },
        });

        // hitung per kategori
        const kategoriCount: Record<string, number> = {};
        semuaKategori.forEach((k) => (kategoriCount[k.nama_kategori] = 0));

        data.forEach((row) => {
            const kategori = row.kategori?.nama_kategori || 'Lainnya';
            kategoriCount[kategori] =
                (kategoriCount[kategori] || 0) + row.jumlah_poin;
        });

        // total semua kategori
        const total = Object.values(kategoriCount).reduce((a, b) => a + b, 0);
        kategoriCount['TOTAL'] = total;

        return {
            tanggal: target,
            kategori: kategoriCount,
        };
    }

}
