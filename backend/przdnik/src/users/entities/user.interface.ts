import { Collection } from 'src/collections/entity/collection.entity';
import { Holiday } from 'src/holidays/entity/holiday.entity';
import { Without } from 'src/shared/types';

export interface UserCreationAttrs {
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  isApproved: boolean;
  isAdmin: boolean;
  birthday: Date;
  avatar: string;
  holidaysCreated: Holiday[];
  collectionsCreated: Collection[];
  collectionsSubscribe: Collection[];
}

export type UserWithoutPassword = Without<IUser, 'password'>;
