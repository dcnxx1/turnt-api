import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

// BASTION : 172.29.88.237
const FRONT_END_URL = 'http://192.168.2.23:8081';
const homeNetwork = 'http://192.168.2.23';
const BASTION_URL = 'http://172.29.88.237:8081';
const b37 = 'http://172.29.12.57:8081';
const b26 = 'http://172.29.15.185:8081';
const b16 = 'http://172.29.88.237:8081';
const b06 = 'http://172.29.15.185:8081';
const b07 = 'http://172.29.61.193:8081';
const b28 = 'http://172.29.63.197:8081';
const b13 = 'http://10.0.5.91:8081';
const hotspot = 'http://172.20.10.2:8081';
const zaandam = 'http://172.29.109.109:8081';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const corsOptions: CorsOptions = {
    origin: [b26, b06, b16, b37, b07, homeNetwork, b28, b13, hotspot, zaandam],
    methods: 'POST,GET,HEAD,OPTIONS,DELETE,PATCH,PUT',
  };
  app.enableCors(corsOptions);
  await app.listen(3000);
}

bootstrap();
