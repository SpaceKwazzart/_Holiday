import { Inject, Module } from '@nestjs/common';
import { HolidayController } from './controller/holidays.controller';
import { holidaysProviders } from './holidays.providers';
import { HOLIDAY_SERVICE, USER_SERVICE } from 'src/shared/constants';
import { IHolidayService } from './service/service.interface';
import { IUserService } from 'src/users/service/service.interface';
import { CreateHolidayDto } from './dto/createHoliday.dto';
import { UserModule } from 'src/users/users.module';
import { CollectionModule } from 'src/collections/collections.module';

@Module({
  controllers: [HolidayController],
  providers: [...holidaysProviders],
  imports: [UserModule, CollectionModule],
  exports: [HOLIDAY_SERVICE],
})
export class HolidayModule {
  constructor(
    @Inject(HOLIDAY_SERVICE) private readonly holidayService: IHolidayService,
    @Inject(USER_SERVICE) private readonly userService: IUserService,
  ) {}

  async onModuleInit() {
    const creatorId = Number(
      (await this.userService.findUserByName(process.env.ADMIN_NAME)).id,
    );
    const data: CreateHolidayDto[] = [
      {
        name: 'New Year',
        dateStart: '31/12',
        dateEnd: '01/01',
        creatorId: creatorId,
      },
      {
        name: "Valentine's Day",
        dateStart: '14/02',
        dateEnd: '14/02',
        creatorId: creatorId,
      },
    ];
    await this.holidayService.createDefaultHolidays(data);
  }
}
