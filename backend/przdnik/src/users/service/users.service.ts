import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';

import { User } from '../entities/user.entity';
import {
  BASIC_COLLECTION_NAME,
  COLLECTION_SERVICE,
  USER_REPOSITORY,
} from 'src/shared/constants';
import { IUserService } from './service.interface';
import { CreateUserDto } from '../dto/createUser.dto';
import { ICollectionService } from 'src/collections/service/service.interface';
import { Holiday } from 'src/holidays/entity/holiday.entity';
import { Collection } from 'src/collections/entity/collection.entity';
import { AccessStatus } from 'src/shared/types';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
    @Inject(COLLECTION_SERVICE)
    private readonly collectionService: ICollectionService,
  ) {}

  async findUserById(id: number): Promise<User> {
    return await this.userRepository.findByPk(id, {
      include: [
        { model: Holiday, as: 'holidaysCreated' },
        { model: Collection, as: 'collectionsCreated' },
        {
          model: Collection,
          as: 'collectionsSubscribe',
        },
      ],
    });
  }

  async findUserByName(name: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { name },
      include: [
        { model: Holiday, as: 'holidaysCreated' },
        { model: Collection, as: 'collectionsCreated' },
        {
          model: Collection,
          as: 'collectionsSubscribe',
        },
      ],
    });
  }

  async findUserByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { email },
      include: [
        { model: Holiday, as: 'holidaysCreated' },
        { model: Collection, as: 'collectionsCreated' },
        {
          model: Collection,
          as: 'collectionsSubscribe',
        },
      ],
    });
  }

  async getAdmins(): Promise<User[]> {
    return await this.userRepository.findAll({ where: { isAdmin: true } });
  }

  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<{ user: User; collection: Collection }> {
    const user = await this.userRepository.create(createUserDto);

    const collectionName = createUserDto.name;
    const collection = await this.collectionService.createCollection({
      name: collectionName,
      creatorId: user.id,
    });

    user.$set('collectionsCreated', [collection.id]);
    user.collectionsCreated = [collection];
    return { user, collection };
  }

  async createDefaultAdmin(createUserDto: CreateUserDto): Promise<void> {
    const checkAdminExists = await this.findUserByName(createUserDto.name);
    if (checkAdminExists) {
      return Promise.resolve();
    }
    const { user, collection } = await this.createUser(createUserDto);
    user.isAdmin = true;
    user.isApproved = true;

    collection.name = BASIC_COLLECTION_NAME;
    collection.accessStatus = AccessStatus.Public;

    await user.save();
    await collection.save();
  }
}
