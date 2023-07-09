import { Module } from '@nestjs/common';
import { UserController } from './controller/users.controller';
import { usersProviders } from './users.providers';
import { USER_SERVICE } from 'src/shared/constants';

@Module({
  controllers: [UserController],
  providers: [...usersProviders],
  imports: [],
  exports: [USER_SERVICE],
})
export class UserModule {}
