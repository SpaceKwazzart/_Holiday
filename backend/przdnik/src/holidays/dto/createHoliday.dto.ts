import { HolidayCreationAttrs } from '../entity/holiday.interface';

export class CreateHolidayDto implements HolidayCreationAttrs {
  readonly name: string;
  readonly dateStart: string;
  readonly dateEnd: string;
  readonly creatorId: number;
  collectionId?: number;
}
