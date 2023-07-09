import { HolidayCreationAttrs } from '../entity/holiday.interface';

export class CreateHolidayDto implements HolidayCreationAttrs {
  readonly name: string;
  readonly dateStart: Date;
  readonly dateEnd: Date;
  readonly creatorId: number;
}
