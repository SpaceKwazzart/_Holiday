import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Collection } from './collection.entity';
import { Holiday } from 'src/holidays/entity/holiday.entity';

@Table({ tableName: 'collection_holiday' })
export class CollectionHoliday extends Model<CollectionHoliday> {
  @ForeignKey(() => Collection)
  @Column
  collectionId: number;

  @ForeignKey(() => Holiday)
  @Column
  holidayId: number;
}
