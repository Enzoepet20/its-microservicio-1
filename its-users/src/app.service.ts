import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { RcpResponse } from './common/models/rcp.model';

@Injectable()
export class AppService {
  getHello(): any {
    const error: RcpResponse = {
      statusCode: 404,
      error: 'Not found',
    };
    throw new RpcException(error);
  }
}
