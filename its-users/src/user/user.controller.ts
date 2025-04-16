import { Controller } from '@nestjs/common';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { RpcResponse } from 'src/common/models/rpc.model';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('createUser')
  create(@Payload() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto).catch((err) => {
      // err.message === 'USERNOTFOUND'; statusCode: 404, error: 'USER NOT FOUND'

      const error: RpcResponse = {
        error: 'INTERNAL SERVER ERROR',
        statusCode: 500,
      };
      
      if (err.code === 'P2002') {
        error.error = 'NO SE PERMITEN VALORES DUPLICADOS (UNIQUE KEY)';
        error.statusCode = 400;
      }
      throw new RpcException(error);
    });
  }
}
