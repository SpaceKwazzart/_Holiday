import { IHoliday } from 'src/holidays/entity/holiday.interface';
import { AccessStatus } from 'src/shared/types';
import { IUser } from 'src/users/entities/user.interface';

export interface CollectionCreationAttrs {
  name: string;
  creatorId: number;
}

export interface ICollection {
  name: string;
  accessStatus: AccessStatus;
  isCommunityBased: boolean;
  creatorId: number;
  creator: IUser;
  holidays: IHoliday[];
}
