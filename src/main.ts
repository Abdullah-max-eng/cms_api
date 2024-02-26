import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv'; // Import dotenv to handle environment variables

async function bootstrap() {
  dotenv.config(); // Load environment variables from .env file

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Clinic Management System")
    .setDescription("APIs for Clinic Management System, Iraq")
    .setVersion('1.0')
    .addTag('clinic')
    .addBearerAuth()
    .build();

  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.enableCors({
    origin: true,
    credentials: true,
  });

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.APP_PORT || 3000); // Use process.env.APP_PORT or fallback to port 3000
}

bootstrap();
