import { USER_REPOSITORY, USER_SERVICE } from 'src/shared/constants';
import { User } from './entities/user.entity';
import { UserService } from './service/users.service';

export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
  {
    provide: USER_SERVICE,
    useClass: UserService,
  },
];
