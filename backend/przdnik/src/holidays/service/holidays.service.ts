import { Injectable, Inject } from '@nestjs/common';
import {
  BASIC_COLLECTION_NAME,
  COLLECTION_SERVICE,
  HOLIDAY_REPOSITORY,
  USER_SERVICE,
} from 'src/shared/constants';
import { Holiday } from '../entity/holiday.entity';
import { IHolidayService } from './service.interface';
import { CreateHolidayDto } from '../dto/createHoliday.dto';
import { ICollectionService } from 'src/collections/service/service.interface';
import { IUserService } from 'src/users/service/service.interface';

@Injectable()
export class HolidayService implements IHolidayService {
  constructor(
    @Inject(HOLIDAY_REPOSITORY)
    private readonly holidayRepository: typeof Holiday,
    @Inject(COLLECTION_SERVICE)
    private readonly collectionService: ICollectionService,
    @Inject(USER_SERVICE)
    private readonly userService: IUserService,
  ) {}

  async createHoliday(createHolidayDto: CreateHolidayDto): Promise<Holiday> {
    if (createHolidayDto.collectionId) {
      const holiday = await this.holidayRepository.create(createHolidayDto);
      const collection = await this.collectionService.findCollectionById(
        createHolidayDto.collectionId,
      );
      await collection.$add('holidays', [holiday]);
      return await holiday;
    }

    const creator = await this.userService.findUserById(
      createHolidayDto.creatorId,
    );

    const collectionForHolidays = creator.collectionsCreated.find(
      (collection) => collection.name === creator.name,
    );

    const holiday = await this.holidayRepository.create(createHolidayDto);
    await collectionForHolidays.$add('holidays', holiday);
    return holiday;
  }

  async createDefaultHolidays(
    holidaysArrayData: CreateHolidayDto[],
  ): Promise<void> {
    const collection = await this.collectionService.findCollectionByName(
      BASIC_COLLECTION_NAME,
    );

    const existingHolidays = await this.holidayRepository.findAll({
      where: {
        name: holidaysArrayData.map((holiday) => holiday.name),
      },
    });
    if (existingHolidays.length === 0) {
      const createdHolidays = await this.holidayRepository.bulkCreate(
        holidaysArrayData,
      );
      await collection.$set(
        'holidays',
        createdHolidays.map((holiday) => holiday.id),
      );
      collection.holidays = [...createdHolidays];
    }
  }
}
