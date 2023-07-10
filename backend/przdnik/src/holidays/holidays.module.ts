import { Module } from '@nestjs/common';
import { HolidayController } from './controller/holidays.controller';
import { holidaysProviders } from './holidays.providers';
import { HOLIDAY_SERVICE } from 'src/shared/constants';

@Module({
  controllers: [HolidayController],
  providers: [...holidaysProviders],
  exports: [HOLIDAY_SERVICE],
})
export class HolidayModule {}
