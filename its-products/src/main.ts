import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(envs.port);
  console.log(`Productos MS listening on ${envs.port}`);
}
bootstrap();