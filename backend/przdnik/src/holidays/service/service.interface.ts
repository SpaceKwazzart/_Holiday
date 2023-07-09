import { CreateHolidayDto } from '../dto/createHoliday.dto';
import { IHoliday } from '../entity/holiday.interface';

export interface IHolidayService {
  createHoliday: (createHolidayDto: CreateHolidayDto) => Promise<IHoliday>;
}
