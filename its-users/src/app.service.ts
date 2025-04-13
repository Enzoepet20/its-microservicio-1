import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { RpcResponse } from './common/models/rpc.model';

@Injectable()
export class AppService {
  getHello(): any {
    const error: RpcResponse = {
      statusCode: 404,
      error: 'Not found',
    };
    throw new RpcException(error);
  }
}
