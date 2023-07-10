import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { HOLIDAY_SERVICE } from 'src/shared/constants';
import { IHolidayService } from '../service/service.interface';
import { CreateHolidayDto } from '../dto/createHoliday.dto';

@Controller('holidays')
export class HolidayController {
  constructor(
    @Inject(HOLIDAY_SERVICE) private readonly holidayService: IHolidayService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createHoliday(@Body() createHolidayDto: CreateHolidayDto) {
    await this.holidayService.createHoliday(createHolidayDto);
  }
}
