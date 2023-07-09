import { Holiday } from 'src/holidays/entity/holiday.entity';
import { IUser, UserCreationAttrs } from './user.interface';
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Collection } from 'src/collections/entity/collection.entity';

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

  @HasMany(() => Holiday)
  holidaysCreated: Holiday[];

  @HasMany(() => Collection)
  collectionsCreated: Collection[];
}
