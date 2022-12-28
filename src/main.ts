import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Agregar prefijo a todas las rutas
  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true
      }
    })
);

  const config = new DocumentBuilder()
    .setTitle('Pokemon Api')
    .setDescription('The pokemon API description')
    .setVersion('2.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)

  await app.listen(process.env.PORT || 3000);
  console.log(`Application is running PORT ${process.env.PORT || 3000}`)
}
bootstrap();
