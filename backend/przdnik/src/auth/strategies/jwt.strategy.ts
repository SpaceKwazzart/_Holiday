import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { USER_SERVICE } from 'src/shared/constants';
import { IUserService } from 'src/users/service/service.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(USER_SERVICE) private readonly userService: IUserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWTKEY,
    });
  }

  async validate(payload: any) {
    const user = await this.userService.findUserById(payload.id);
    if (!user) {
      throw new UnauthorizedException(
        'You are not authorized to perform the operation',
      );
    }
    return payload;
  }
}
