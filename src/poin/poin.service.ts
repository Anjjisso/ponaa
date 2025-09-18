// src/poin/poin.service.ts
import {
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePoinDto } from './dto/create-poin.dto';
import { UpdatePoinDto } from './dto/update-poin.dto';

@Injectable()
export class PoinService {
    constructor(private prisma: PrismaService) { }

    // ===========================
    // GET poin by siswa
    // ===========================
    async findBySiswa(id_siswa: number) {
        return this.prisma.poin.findMany({
            where: { user_siswa: id_siswa },
            include: { kategori: true },
            orderBy: { tanggal: 'desc' },
        });
    }

    // ===========================
    // CREATE poin (tambah saldo)
    // ===========================
    async create(data: CreatePoinDto) {
        // Ambil kategori untuk tahu nilai_default
        const kategori = await this.prisma.kategori_Poin.findUnique({
            where: { id_kategori: data.kategori_id },
        });
        if (!kategori) throw new NotFoundException('Kategori tidak ditemukan');

        // Cek apakah siswa sudah punya record poin (saldo)
        const existing = await this.prisma.poin.findFirst({
            where: { user_siswa: data.user_siswa },
        });

        if (existing) {
            // Jika sudah ada → tambahkan jumlah_poin seperti saldo
            return this.prisma.poin.update({
                where: { id_poin: existing.id_poin },
                data: {
                    jumlah_poin: { increment: kategori.nilai_default },
                    tanggal: new Date(),
                    kategori: { connect: { id_kategori: data.kategori_id } },
                },
                include: { kategori: true, siswa: true },
            });
        }

        // Jika belum ada → buat record baru
        return this.prisma.poin.create({
            data: {
                jumlah_poin: kategori.nilai_default,
                tanggal: new Date(),
                siswa: { connect: { id_siswa: data.user_siswa } },
                kategori: { connect: { id_kategori: data.kategori_id } },
            },
            include: { kategori: true, siswa: true },
        });
    }

    // ===========================
    // GET all poin
    // ===========================
    async findAll() {
        return this.prisma.poin.findMany({
            include: { kategori: true, siswa: true },
            orderBy: { tanggal: 'desc' },
        });
    }

    // ===========================
    // GET one poin
    // ===========================
    async findOne(id: number) {
        const poin = await this.prisma.poin.findUnique({
            where: { id_poin: id },
            include: { kategori: true, siswa: true },
        });
        if (!poin) throw new NotFoundException('Poin tidak ditemukan');
        return poin;
    }

    // ===========================
    // UPDATE poin (manual override)
    // ===========================
    async update(id: number, data: UpdatePoinDto) {
        const existing = await this.prisma.poin.findUnique({
            where: { id_poin: id },
        });
        if (!existing) throw new NotFoundException('Poin tidak ditemukan');

        let jumlah = existing.jumlah_poin;

        // Jika kategori berubah → ambil nilai_default kategori baru
        if (data.kategori_id && data.kategori_id !== existing.kategori_id) {
            const kategoriBaru = await this.prisma.kategori_Poin.findUnique({
                where: { id_kategori: data.kategori_id },
            });
            if (!kategoriBaru) throw new NotFoundException('Kategori tidak ditemukan');
            jumlah = kategoriBaru.nilai_default;
        }

        return this.prisma.poin.update({
            where: { id_poin: id },
            data: {
                jumlah_poin: jumlah,
                ...(data.user_siswa
                    ? { siswa: { connect: { id_siswa: data.user_siswa } } }
                    : {}),
                ...(data.kategori_id
                    ? { kategori: { connect: { id_kategori: data.kategori_id } } }
                    : {}),
            },
            include: { kategori: true, siswa: true },
        });
    }

    // ===========================
    // DELETE poin
    // ===========================
    async remove(id: number) {
        const existing = await this.prisma.poin.findUnique({
            where: { id_poin: id },
        });
        if (!existing) throw new NotFoundException('Poin tidak ditemukan');
        return this.prisma.poin.delete({ where: { id_poin: id } });
    }

    // ===========================
    // FOTO
    // ===========================
    async uploadFoto(id: number, fileBuffer: Buffer) {
        const existing = await this.prisma.poin.findUnique({
            where: { id_poin: id },
        });
        if (!existing) throw new NotFoundException('Poin tidak ditemukan');

        return this.prisma.poin.update({
            where: { id_poin: id },
            data: { foto: fileBuffer },
        });
    }

    async getFoto(id: number) {
        const poin = await this.prisma.poin.findUnique({
            where: { id_poin: id },
        });
        if (!poin || !poin.foto) throw new NotFoundException('Foto tidak ditemukan');
        return poin.foto; // Buffer, kirim ke frontend
    }
}
