import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { UserModule } from 'src/users/users.module';
import { authProviders } from './auth.providers';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AUTH_SERVICE } from 'src/shared/constants';

@Module({
  controllers: [AuthController],
  providers: [...authProviders],
  imports: [
    forwardRef(() => UserModule),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWTKEY,
      signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
    }),
  ],
  exports: [AUTH_SERVICE],
})
export class AuthModule {}
