import { Holiday } from 'src/holidays/entity/holiday.entity';
import { AccessStatus } from 'src/shared/types';
import { User } from 'src/users/entities/user.entity';

export interface CollectionCreationAttrs {
  name: string;
  creatorId: number;
}

export interface ICollection {
  name: string;
  accessStatus: AccessStatus;
  creatorId: number;
  creator: User;
  holidays: Holiday[];
  subscribers: User[];
}
