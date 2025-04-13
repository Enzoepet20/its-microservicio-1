import { HttpStatus, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { RpcResponse } from 'src/common/models/rpc.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(newUser: CreateUserDto) {
    const rpcError: RpcResponse = {
      statusCode: 500,
      error: '',
    };

    try {
      if (!newUser) {
        rpcError.statusCode = HttpStatus.CONFLICT;
        rpcError.error = 'No user in request';
        throw new RpcException(rpcError);
      }
      return { ...newUser, id: 1 };
    } catch (err) {
      rpcError.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
      rpcError.error = `Something goes wrong: ${err}`;
      throw new RpcException(rpcError);
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
