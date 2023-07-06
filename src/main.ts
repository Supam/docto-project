import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle("Docto")
    .setDescription("The API documentation of the Docto project")
    .setVersion("0.1")
    .build();


  const docuemnt = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, docuemnt);

  await app.listen(3000);
}

bootstrap();
