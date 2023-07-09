import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { User } from './user.entity';
import { Collection } from 'src/collections/entity/collection.entity';

@Table({ tableName: 'user_collection' })
export class UserCollection extends Model<UserCollection> {
  // This model is used for subscribe logic. Pair user - collection shows fact that user is subscribed to Collection
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Collection)
  @Column
  collectionId: number;
}
