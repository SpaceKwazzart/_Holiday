import { Email } from 'src/shared/types';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/createUser.dto';
import { Collection } from 'src/collections/entity/collection.entity';

export interface IUserService {
  findUserById: (id: number) => Promise<User>;

  findUserByName: (name: string) => Promise<User>;

  findUserByEmail: (email: Email) => Promise<User>;

  createUser: (
    createUserDto: CreateUserDto,
  ) => Promise<{ user: User; collection: Collection }>;
}
