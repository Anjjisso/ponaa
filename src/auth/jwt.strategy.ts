import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'yourSecretKey', // sama dengan secret di JwtModule
        });
    }

    async validate(payload: any) {
        return {
            id_user: payload.sub,
            email: payload.email,
            role: payload.role,
            id_siswa: payload.id_siswa,
            id_guru: payload.id_guru,
        };
    }
}
