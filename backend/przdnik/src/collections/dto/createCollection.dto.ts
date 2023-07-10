import { IHoliday } from 'src/holidays/entity/holiday.interface';
import { AccessStatus } from 'src/shared/types';

export class CreateCollectionDto {
  readonly name: string;
  readonly creatorId: number;
  readonly accessStatus?: AccessStatus;
  readonly isCommunityBased?: boolean;
  readonly holidays?: IHoliday[];
}
