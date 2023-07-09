import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { CollectionCreationAttrs, ICollection } from './collection.interface';
import { AccessStatus } from 'src/shared/types';
import { Holiday } from 'src/holidays/entity/holiday.entity';
import { CollectionHoliday } from './collectionHoliday.entity';
import { User } from 'src/users/entities/user.entity';
import { IUser } from 'src/users/entities/user.interface';
import { UserCollection } from 'src/users/entities/userCollection.entity';

@Table({ tableName: 'collection' })
export class Collection
  extends Model<Collection, CollectionCreationAttrs>
  implements ICollection
{
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: AccessStatus.Private,
  })
  accessStatus: AccessStatus;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isCommunityBased: boolean;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  creatorId: number;

  @BelongsTo(() => User)
  creator: IUser;

  @BelongsToMany(() => Holiday, () => CollectionHoliday)
  holidays: Holiday[];

  @BelongsToMany(() => User, () => UserCollection)
  subscribers: IUser[];
}
