import { Body, Controller, HttpException, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { MS_USER } from 'src/common/constants/user-ms.constant';
import { RpcResponse } from 'src/common/models/rpc.model';

@Controller('user')
export class UserController {
  constructor(@Inject(MS_USER) private readonly userClient: ClientProxy) {}

  @Post()
  create(@Body() createUserDto) {
    return this.userClient.send('createUser', createUserDto).pipe(
      catchError(
        ({
          error = 'INTERNAL SERVER ERROR',
          statusCode = 500,
        }: RpcResponse) => {
          throw new HttpException(error, statusCode);
        },
      ),
    );
  }
}
