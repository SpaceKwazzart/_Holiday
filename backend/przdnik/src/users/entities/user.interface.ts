import { Without } from 'src/shared/types';

export interface IUser {
  name: string;
  email: string;
  password: string;
  isApproved: boolean;
  birthday: Date;
  avatar: string;
}

export type UserWithoutPassword = Without<IUser, 'password'>;
