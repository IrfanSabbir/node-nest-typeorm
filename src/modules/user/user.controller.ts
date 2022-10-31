import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { createUserDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@ApiTags('USER')
@Controller('/user')
export class userController {
  constructor(private userService: UserService) {}

  @Post('/register')
  @ApiCreatedResponse({
    description: 'Created user object as response',
    type: User,
  })
  @ApiBadRequestResponse({ description: 'User cannot register. Try again!' })
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
