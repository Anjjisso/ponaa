import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    // CREATE
    async create(data: CreateUserDto) {
        try {
            return await this.prisma.user.create({
                data,
            });
        } catch (error) {
            if (error.code === 'P2002') {
                throw new ConflictException('Email sudah terdaftar');
            }
            throw error;
        }
    }

    // READ ALL
    async findAll() {
        return this.prisma.user.findMany({
            include: { guru: true, siswa: true },
        });
    }

    // READ ONE
    async findOne(id: number) {
        return this.prisma.user.findUnique({
            where: { id_user: id },
            include: { guru: true, siswa: true },
        });
    }

    // UPDATE
    async update(id_user: number, data: UpdateUserDto) {
        if (!data || Object.keys(data).length === 0) {
            throw new Error('Body update tidak boleh kosong');
        }

        try {
            return await this.prisma.user.update({
                where: { id_user },
                data: {
                    email: data.email,
                    password: data.password,
                    role: data.role,
                },
            });
        } catch (error: any) {
            console.error('Update error:', error);
            throw error;
        }
    }



    // DELETE
    async remove(id: number) {
        return this.prisma.user.delete({
            where: { id_user: id },
        });
    }

    // Tetap ada helper ini kalau nanti butuh
    async findByEmail(email: string) {
        return this.prisma.user.findUnique({
            where: { email },
            include: { guru: true, siswa: true },
        });
    }
}
