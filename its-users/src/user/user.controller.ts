import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ users: 'create' })
  create(@Payload('newUser') newUser: CreateUserDto) {
    return this.userService.create(newUser);
  }
}
