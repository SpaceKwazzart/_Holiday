import { AUTH_SERVICE } from 'src/shared/constants';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { Email } from 'src/shared/types';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(AUTH_SERVICE) private readonly authService: AuthService) {
    super({
      usernameField: 'identifier',
      passwordField: 'password',
    });
  }

  async validate(identifier: string | Email, password: string): Promise<any> {
    console.log('Inside local validation');
    const user = await this.authService.validateUserByIdentifier(
      password,
      identifier,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid user credentials');
    }
    return user;
  }
}
