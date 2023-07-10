import { AccessStatus } from 'src/shared/types';
import { ICollection } from '../entity/collection.interface';
import { Holiday } from 'src/holidays/entity/holiday.entity';

export class UpdateCollectionDto implements Partial<ICollection> {
  readonly name?: string;
  readonly accessStatus?: AccessStatus;
  readonly holidays?: Holiday[];
}
