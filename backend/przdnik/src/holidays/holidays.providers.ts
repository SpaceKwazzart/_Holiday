import { HOLIDAY_REPOSITORY, HOLIDAY_SERVICE } from 'src/shared/constants';
import { HolidayService } from './service/holidays.service';
import { Holiday } from './entity/holiday.entity';

export const holidaysProviders = [
  {
    provide: HOLIDAY_REPOSITORY,
    useValue: Holiday,
  },
  {
    provide: HOLIDAY_SERVICE,
    useClass: HolidayService,
  },
];
