import { Injectable, Inject } from '@nestjs/common';
import { HOLIDAY_REPOSITORY } from 'src/shared/constants';
import { Holiday } from '../entity/holiday.entity';
import { IHolidayService } from './service.interface';
import { CreateHolidayDto } from '../dto/createHoliday.dto';

@Injectable()
export class HolidayService implements IHolidayService {
  constructor(
    @Inject(HOLIDAY_REPOSITORY)
    private readonly holidayRepository: typeof Holiday,
  ) {}

  async createHoliday(createHolidayDto: CreateHolidayDto): Promise<Holiday> {
    return await this.holidayRepository.create(createHolidayDto);
  }
}
