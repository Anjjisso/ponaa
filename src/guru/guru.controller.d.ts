import { GuruService } from './guru.service';
import { CreateGuruDto } from './dto/create-guru.dto';
import { UpdateGuruDto } from './dto/update-guru.dto';
export declare class GuruController {
    private readonly guruService;
    constructor(guruService: GuruService);
    create(createGuruDto: CreateGuruDto): import("generated/prisma").Prisma.Prisma__GuruClient<{
        nama: string;
        nip: number;
        id_guru: number;
        user_id: number;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<({
        user: {
            id_user: number;
            email: string;
            password: string;
            role: import("generated/prisma").$Enums.Role;
        };
    } & {
        nama: string;
        nip: number;
        id_guru: number;
        user_id: number;
    })[]>;
    findOne(id_guru: string): import("generated/prisma").Prisma.Prisma__GuruClient<({
        user: {
            id_user: number;
            email: string;
            password: string;
            role: import("generated/prisma").$Enums.Role;
        };
    } & {
        nama: string;
        nip: number;
        id_guru: number;
        user_id: number;
    }) | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id_guru: string, updateGuruDto: UpdateGuruDto): import("generated/prisma").Prisma.Prisma__GuruClient<{
        nama: string;
        nip: number;
        id_guru: number;
        user_id: number;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id_guru: string): import("generated/prisma").Prisma.Prisma__GuruClient<{
        nama: string;
        nip: number;
        id_guru: number;
        user_id: number;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
