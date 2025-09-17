import { Controller, Post, Body } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    @ApiBody({ type: LoginDto })   // <== supaya Swagger tahu ada body
    async login(@Body() dto: LoginDto) {
        return this.authService.login(dto);
    }
}
