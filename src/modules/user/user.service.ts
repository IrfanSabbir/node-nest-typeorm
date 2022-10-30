import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { createUserDto } from './user.dto';
import { User } from './user.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async registerUser(user: createUserDto): Promise<User> {
    const genSalt = await bcrypt.genSalt();
    const password = await bcrypt.hash(user.password, genSalt);

    return this.userRepository.save({
      name: user.name,
      email: user.email,
      password: password,
    });
  }
}