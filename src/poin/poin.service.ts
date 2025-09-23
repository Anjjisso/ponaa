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

    async findBySiswa(id_siswa: number) {
        return this.prisma.poin.findMany({
            where: { user_siswa: id_siswa },
            include: { kategori: true },
            orderBy: { tanggal: 'desc' },
        });
    }

    async create(data: CreatePoinDto, fileBuffer?: Buffer) {
        const kategori = await this.prisma.kategori_Poin.findUnique({
            where: { id_kategori: data.kategori_id },
        });
        if (!kategori) throw new NotFoundException('Kategori tidak ditemukan');

        const [poin] = await this.prisma.$transaction([
            this.prisma.poin.create({
                data: {
                    jumlah_poin: kategori.nilai_default,
                    tanggal: new Date(),
                    foto: fileBuffer ?? null, // simpan foto kalau ada
                    siswa: { connect: { id_siswa: data.user_siswa } },
                    kategori: { connect: { id_kategori: data.kategori_id } },
                },
                include: { kategori: true, siswa: true },
            }),
            this.prisma.siswa.update({
                where: { id_siswa: data.user_siswa },
                data: { total_poin: { increment: kategori.nilai_default } },
            }),
        ]);

        return poin;
    }

    async findAll() {
        return this.prisma.poin.findMany({
            include: { kategori: true, siswa: true },
            orderBy: { tanggal: 'desc' },
        });
    }

    async findOne(id: number) {
        const poin = await this.prisma.poin.findUnique({
            where: { id_poin: id },
            include: { kategori: true, siswa: true },
        });
        if (!poin) throw new NotFoundException('Poin tidak ditemukan');
        return poin;
    }

    async update(id: number, data: UpdatePoinDto) {
        const existing = await this.prisma.poin.findUnique({
            where: { id_poin: id },
        });
        if (!existing) throw new NotFoundException('Poin tidak ditemukan');

        let jumlah = existing.jumlah_poin;

        if (data.kategori_id && data.kategori_id !== existing.kategori_id) {
            const kategoriBaru = await this.prisma.kategori_Poin.findUnique({
                where: { id_kategori: data.kategori_id },
            });
            if (!kategoriBaru)
                throw new NotFoundException('Kategori tidak ditemukan');
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

    async remove(id: number) {
        const existing = await this.prisma.poin.findUnique({
            where: { id_poin: id },
        });
        if (!existing) throw new NotFoundException('Poin tidak ditemukan');
        return this.prisma.poin.delete({ where: { id_poin: id } });
    }

    async getFoto(id: number) {
        const poin = await this.prisma.poin.findUnique({
            where: { id_poin: id },
        });
        if (!poin || !poin.foto) throw new NotFoundException('Foto tidak ditemukan');
        return poin.foto;
    }

    async getTotalBySiswa(id_siswa: number) {
        const siswa = await this.prisma.siswa.findUnique({
            where: { id_siswa },
            select: { total_poin: true },
        });
        return siswa?.total_poin ?? 0;
    }
}
