import { Module } from '@nestjs/common';
import { UserController } from './controller/users.controller';
import { usersProviders } from './users.providers';
import { USER_SERVICE } from 'src/shared/constants';
import { CollectionModule } from 'src/collections/collections.module';

@Module({
  controllers: [UserController],
  providers: [...usersProviders],
  imports: [CollectionModule],
  exports: [USER_SERVICE],
})
export class UserModule {}
