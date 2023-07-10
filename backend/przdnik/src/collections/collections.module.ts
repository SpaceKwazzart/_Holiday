import { Module } from '@nestjs/common';
import { CollectionController } from './controller/collections.controller';
import { collectionsProviders } from './collections.providers';
import { COLLECTION_SERVICE } from 'src/shared/constants';

@Module({
  controllers: [CollectionController],
  providers: [...collectionsProviders],
  exports: [COLLECTION_SERVICE],
})
export class CollectionModule {}
