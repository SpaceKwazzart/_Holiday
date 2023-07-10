import {
  COLLECTION_REPOSITORY,
  COLLECTION_SERVICE,
} from 'src/shared/constants';
import { Collection } from './entity/collection.entity';
import { CollectionService } from './service/collections.service';

export const collectionsProviders = [
  {
    provide: COLLECTION_REPOSITORY,
    useValue: Collection,
  },
  {
    provide: COLLECTION_SERVICE,
    useClass: CollectionService,
  },
];
