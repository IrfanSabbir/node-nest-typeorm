import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUserCreds(
    email: string,
    password: string,
  ): Promise<User | undefined> {
    const user = await this.userService.getUserByEmail(email);
    if (!user) throw new BadRequestException();

    if (!(await bcrypt.compare(password, user.password)))
      throw new UnauthorizedException();

    return user;
  }

  generateToken(user: User): string {
    return this.jwtService.sign({
      sub: user.id,
      name: user.name,
    });
  }

  async getProfile(id: number): Promise<User | undefined> {
    const user = await this.userService.getUserProfile(id);
    if (!user) throw new BadRequestException();
    delete user.password;
    return user;
  }
}
