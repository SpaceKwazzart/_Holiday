import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../shared/constants';
import { databaseConfig } from './database.config';
import { User } from '../users/entities/user.entity';
import { Holiday } from 'src/holidays/entity/holiday.entity';
import { Collection } from 'src/collections/entity/collection.entity';
import { CollectionHoliday } from 'src/collections/entity/collectionHoliday.entity';
import { UserCollection } from 'src/users/entities/userCollection.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([
        User,
        Holiday,
        Collection,
        CollectionHoliday,
        UserCollection,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
