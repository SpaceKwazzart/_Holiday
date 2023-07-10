import { AccessStatus } from 'src/shared/types';
import { User } from 'src/users/entities/user.entity';

export interface HolidayCreationAttrs {
  name: string;
  dateStart: string;
  dateEnd: string;
  creatorId: number;
  description?: string;
}

export interface IHoliday {
  name: string;
  dateStart: string;
  dateEnd: string;
  creatorId: number;
  creator: User;
  description: string;
  accessStatus: AccessStatus;
}
