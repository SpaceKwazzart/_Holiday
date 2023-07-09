import { Email } from 'src/shared/types';
import { CreateUserDto } from 'src/users/dto/createUser.dto';
import { IUser, UserWithoutPassword } from 'src/users/entities/user.interface';

export interface IAuthService {
  validateUserByIdentifier: (
    inputPassword: string,
    identifier: string | Email,
  ) => Promise<UserWithoutPassword>;

  login: (user: IUser) => Promise<{ user: UserWithoutPassword; token: string }>;

  createUser: (
    createUserDto: CreateUserDto,
  ) => Promise<{ user: UserWithoutPassword; token: string }>;
}
