import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { envs } from './config/envs';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MS_USER',
        transport: Transport.TCP,
        options: envs.MS.USER,
      },
      {
        name: 'MS_PRODUCT',
        transport: Transport.TCP,
        options: envs.MS.PRODUCT,
      },
      {
        name: 'MS_INVOICE',
        transport: Transport.TCP,
        options: envs.MS.INVOICE,
      },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}