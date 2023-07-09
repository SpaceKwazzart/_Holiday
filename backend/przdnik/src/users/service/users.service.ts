import { Inject, Injectable } from '@nestjs/common';

import { User } from '../entities/user.entity';
import { USER_REPOSITORY } from 'src/shared/constants';
import { IUserService } from './service.interface';
import { CreateUserDto } from '../dto/createUser.dto';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async findUserById(id: number): Promise<User> {
    return await this.userRepository.findByPk(id);
  }

  async findUserByName(name: string): Promise<User> {
    return await this.userRepository.findOne({ where: { name } });
  }

  async findUserByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.create(createUserDto);
  }
}
