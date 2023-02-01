import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';

import {AppModule} from './app.module';


async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Урок ULBI TV по продвинутому BACKEND')
    .setDescription('документация REST API')
    .setVersion('1.0.1')
    .addTag('LexKorn')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  app.useGlobalPipes(new ValidationPipe());  // можно указать глобально здесь, а можно для конкретного endpoint в controller

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

start(); 