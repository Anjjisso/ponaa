// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) { }

    /**
     * Login user (guru atau siswa)
     * - Validasi email & password
     * - Cari apakah user adalah guru atau siswa
     * - Masukkan id_guru / id_siswa ke payload JWT
     */
    async login(dto: LoginDto) {
        // Cek user berdasarkan email
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (!user) {
            throw new UnauthorizedException('Email tidak ditemukan');
        }

        // Cek password
        const isMatch = await bcrypt.compare(dto.password, user.password);
        if (!isMatch) {
            throw new UnauthorizedException('Password salah');
        }

        // Cari apakah user ini guru atau siswa
        const guru = await this.prisma.guru.findUnique({
            where: { user_id: user.id_user },
        });

        const siswa = await this.prisma.siswa.findUnique({
            where: { id_user: user.id_user },
        });

        // Buat payload token
        const payload: Record<string, any> = {
            sub: user.id_user,         // id user
            email: user.email,
            role: user.role,
        };

        if (guru) payload.id_guru = guru.id_guru;
        if (siswa) payload.id_siswa = siswa.id_siswa;

        // Sign JWT
        const token = this.jwtService.sign(payload);

        return {
            access_token: token,
            user: {
                id_user: user.id_user,
                email: user.email,
                role: user.role,
                id_guru: guru?.id_guru ?? null,
                id_siswa: siswa?.id_siswa ?? null,
            },
        };
    }
}
