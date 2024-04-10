import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';


const homeNetwork = 'http://192.168.2.23';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const corsOptions: CorsOptions = {
    origin: [homeNetwork],
    methods: 'POST,GET,HEAD,OPTIONS,DELETE,PATCH,PUT',
  };
  app.enableCors(corsOptions);
  await app.listen(3000);
}

bootstrap();
