import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HolidayModule } from './holidays/holidays.module';
import { CollectionModule } from './collections/collections.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UserModule,
    AuthModule,
    CollectionModule,
    HolidayModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
