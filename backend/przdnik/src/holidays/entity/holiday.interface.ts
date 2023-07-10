import { User } from 'src/users/entities/user.entity';

export interface HolidayCreationAttrs {
  name: string;
  dateStart: Date;
  dateEnd: Date;
  creatorId: number;
  description?: string;
}

export interface IHoliday {
  name: string;
  dateStart: Date;
  dateEnd: Date;
  creatorId: number;
  creator: User;
  description: string;
}
