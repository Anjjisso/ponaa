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
  ) {}

  async login(dto: LoginDto) {
    // Cari user berdasarkan email
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      throw new UnauthorizedException('Email atau password salah');
    }

    // Validasi password
    const isMatch = await bcrypt.compare(dto.password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Email atau password salah');
    }

    // Cek apakah user punya role sebagai guru atau siswa
    const guru = await this.prisma.guru.findUnique({
      where: { user_id: user.id_user }, // pastikan field sesuai Prisma schema
    });

    const siswa = await this.prisma.siswa.findUnique({
      where: { id_user: user.id_user }, // samakan field, jangan campur id_user / user_id
    });

    // Payload JWT
    const payload = {
      sub: user.id_user,
      email: user.email,
      role: user.role,
      id_guru: guru?.id_guru ?? null,
      id_siswa: siswa?.id_siswa ?? null,
    };

    const token = this.jwtService.sign(payload);

    return {
      message: 'Login berhasil',
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
