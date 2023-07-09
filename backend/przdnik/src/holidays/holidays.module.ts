import { Module } from '@nestjs/common';
import { HolidayController } from './controller/holidays.controller';
import { holidaysProviders } from './holidays.providers';

@Module({
  controllers: [HolidayController],
  providers: [...holidaysProviders],
})
export class HolidayModule {}
