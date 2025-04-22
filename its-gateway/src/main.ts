import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`Gateway listening on port ${envs.PORT}`);
  await app.listen(envs.PORT);
}
bootstrap();