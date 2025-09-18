import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET || 'supersecret_jwt_key', // gunakan env variable
        });
    }

    async validate(payload: any) {
        // payload wajib berisi role
        if (!payload.role) {
            // kalau role tidak ada di token, lempar error agar langsung 401
            throw new Error('Role tidak ditemukan di token');
        }

        // kembalikan user object ke request.user
        return {
            id_user: payload.sub,
            email: payload.email,
            role: payload.role,
            id_siswa: payload.id_siswa || null,
            id_guru: payload.id_guru || null,
        };
    }
}
