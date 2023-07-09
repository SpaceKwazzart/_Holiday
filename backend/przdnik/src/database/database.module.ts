import { Module, forwardRef } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { UserModule } from 'src/users/users.module';

@Module({
  providers: [...databaseProviders],
  imports: [forwardRef(() => UserModule)],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
