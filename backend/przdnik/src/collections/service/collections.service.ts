import { Injectable, Inject } from '@nestjs/common';
import { COLLECTION_REPOSITORY } from 'src/shared/constants';
import { Collection } from '../entity/collection.entity';
import { ICollectionService } from './service.interface';
import { CreateCollectionDto } from '../dto/createCollection.dto';
import { UpdateCollectionDto } from '../dto/updateCollection.dto';

@Injectable()
export class CollectionService implements ICollectionService {
  constructor(
    @Inject(COLLECTION_REPOSITORY)
    private readonly collectionRepository: typeof Collection,
  ) {}

  async createCollection(
    createCollectionDto: CreateCollectionDto,
  ): Promise<Collection> {
    return await this.collectionRepository.create(createCollectionDto);
  }

  async updateCollection(
    collectionId: number,
    updateCollectionDto: UpdateCollectionDto,
  ): Promise<Collection> {
    const collection = await this.collectionRepository.findByPk(collectionId);
    await collection.update(updateCollectionDto);
    return collection;
  }
}
