import { CreateHolidayDto } from '../dto/createHoliday.dto';
import { Holiday } from '../entity/holiday.entity';

export interface IHolidayService {
  createHoliday: (createHolidayDto: CreateHolidayDto) => Promise<Holiday>;

  createDefaultHolidays: (
    holidaysArrayData: CreateHolidayDto[],
  ) => Promise<void>;
}
