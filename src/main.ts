import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const privateKeyPath = path.join(
    'src',
    'config',
    'secrets',
    'private.key.pem',
  );
  const certPath = path.join('src', 'config', 'secrets', 'domain.cert.pem');

  const httpsOptions = {
    key: fs.readFileSync(privateKeyPath),
    cert: fs.readFileSync(certPath),
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });

  const PORT = process.env.PORT;
  const config = new DocumentBuilder()
    .setTitle('DevConnect')
    .setDescription('API para o DevConnect')
    .setVersion('0.1')
    .addTag('devconnect')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(PORT || 3001);
}
bootstrap();
