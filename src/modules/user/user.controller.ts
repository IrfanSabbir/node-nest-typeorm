import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { createUserDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('/user')
export class userController {
  constructor(private userService: UserService) {}

  @Post('/register')
  @HttpCode(200)
  @UsePipes(
    new ValidationPipe({
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    }),
  )
  async doRegisterNewUser(@Body() createUser: createUserDto): Promise<User> {
    return this.userService.registerUser(createUser);
  }
}
