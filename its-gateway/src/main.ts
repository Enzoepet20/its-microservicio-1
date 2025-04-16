import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config/envs';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('Gateway ITS');

  logger.log(`Listening on port: ${envs.PORT}`);

  await app.listen(envs.PORT);
}
bootstrap();
