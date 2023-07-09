import { Module } from '@nestjs/common';
import { HolidayController } from './controller/holidays.controller';
import { HolidayService } from './service/holidays.service';

@Module({
  controllers: [HolidayController],
  providers: [HolidayService],
})
export class HolidayModule {}
