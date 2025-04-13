import { Controller, Get, HttpException, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { RpcResponse } from './common/models/rpc.model';
import { MS_USER } from './common/constants/user-ms.constant';

@Controller()
export class AppController {
  constructor(@Inject(MS_USER) private readonly userClient: ClientProxy) {}

  @Get()
  getHello() {
    return this.userClient.send('getHello', {}).pipe(
      catchError(
        (rpcError: RpcResponse /** Acá ya sabemos que tipo de error es */) => {
          const { statusCode = 500, error } = rpcError;

          throw new HttpException(error ?? rpcError, statusCode);
        },
      ),
    );
  }
}
