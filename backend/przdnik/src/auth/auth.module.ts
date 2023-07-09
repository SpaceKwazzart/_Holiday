import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { UserModule } from 'src/users/users.module';
import { authProviders } from './auth.providers';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [...authProviders],
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWTKEY,
      signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
    }),
  ],
})
export class AuthModule {}
