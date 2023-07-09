import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { SALT_ROUNDS, USER_SERVICE } from 'src/shared/constants';

import { isEmail } from 'class-validator';

import { IUserService } from 'src/users/service/service.interface';
import { UserWithoutPassword } from 'src/users/entities/user.interface';
import { IAuthService } from './service.interface';
import { Email } from 'src/shared/types';
import { CreateUserDto } from 'src/users/dto/createUser.dto';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(USER_SERVICE) private readonly userService: IUserService,
    private readonly jwtService: JwtService,
  ) {}

  public async validateUserByIdentifier(
    inputPassword: string,
    identifier: string | Email,
  ): Promise<UserWithoutPassword> {
    let user;
    if (isEmail(identifier)) {
      user = await this.userService.findUserByEmail(identifier as Email);
    } else {
      user = await this.userService.findUserByName(identifier);
    }
    if (!user) {
      return null;
    }

    const isMatched = this.comparePassword(inputPassword, user.password);
    if (!isMatched) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user['dataValues'];
    return result;
  }

  public async login(user: UserWithoutPassword) {
    const token = await this.generateToken(user);
    return { user, token };
  }

  public async createUser(
    createUserDto: CreateUserDto,
  ): Promise<{ user: UserWithoutPassword; token: string }> {
    const pass = await this.hashPassword(createUserDto.password);

    const newUser = await this.userService.createUser({
      ...createUserDto,
      password: pass,
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = newUser['dataValues'];

    const token = await this.generateToken(result);

    return { user: result, token };
  }

  // Private methods
  private async generateToken(user) {
    const token = await this.jwtService.signAsync(user);
    return token;
  }

  private async hashPassword(password) {
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    return hash;
  }

  private async comparePassword(enteredPassword, dbPassword) {
    const isMatched = await bcrypt.compare(enteredPassword, dbPassword);
    return isMatched;
  }
}
