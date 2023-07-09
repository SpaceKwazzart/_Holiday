import {
  AUTH_SERVICE,
  AUTH_STRATEGY_JWT,
  AUTH_STRATEGY_LOCAL,
} from 'src/shared/constants';
import { AuthService } from './service/auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

export const authProviders = [
  // {
  //   provide: AUTH_REPOSITORY,
  //   useValue: User,
  // },
  {
    provide: AUTH_SERVICE,
    useClass: AuthService,
  },
  {
    provide: AUTH_STRATEGY_LOCAL,
    useClass: LocalStrategy,
  },
  {
    provide: AUTH_STRATEGY_JWT,
    useClass: JwtStrategy,
  },
];
