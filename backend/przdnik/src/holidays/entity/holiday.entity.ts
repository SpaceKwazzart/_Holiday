import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import { HolidayCreationAttrs, IHoliday } from './holiday.interface';
import { User } from 'src/users/entities/user.entity';
import { CollectionHoliday } from 'src/collections/entity/collectionHoliday.entity';
import { Collection } from 'src/collections/entity/collection.entity';
import { AccessStatus } from 'src/shared/types';

@Table({ tableName: 'holiday' })
export class Holiday
  extends Model<Holiday, HolidayCreationAttrs>
  implements IHoliday
{
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  dateStart: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  dateEnd: Date;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: AccessStatus.Private,
  })
  accessStatus: AccessStatus;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  creatorId: number;

  @BelongsTo(() => User)
  creator: User;

  @BelongsToMany(() => Collection, () => CollectionHoliday)
  collections: Collection[];
}
