import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // --- Konfigurasi Swagger ---
  const config = new DocumentBuilder()
    .setTitle('PONA API')
    .setDescription('API untuk auth, guru, siswa, dll.')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'header',
        description: 'Masukkan JWT token anda',
      },
      'JWT-auth', // nama skema (bebas, asal konsisten dengan @ApiBearerAuth)
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // --- CORS ---
  app.enableCors({
    origin: 'http://localhost:3001', // alamat FE (Next.js)
    credentials: true,
  });

  await app.listen(3001);
}
bootstrap();
