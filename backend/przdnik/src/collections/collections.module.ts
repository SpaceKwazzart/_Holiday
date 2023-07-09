import { Module } from '@nestjs/common';
import { CollectionController } from './controller/collections.controller';
import { CollectionService } from './service/collections.service';

@Module({
  controllers: [CollectionController],
  providers: [CollectionService],
})
export class CollectionModule {}
