import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
