import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { IUser } from './user.interface';

interface UserCreationAttrs {
  name: string;
  email: string;
  password: string;
}

@Table({ tableName: 'user' })
export class User extends Model<User, UserCreationAttrs> implements IUser {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  })
  isApproved: boolean;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  birthday: Date;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  avatar: string;
}
