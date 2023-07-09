import { IUser } from 'src/users/entities/user.interface';

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
  creator: IUser;
  description: string;
  isCommunityBased: boolean;
}
