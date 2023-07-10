import { CreateCollectionDto } from '../dto/createCollection.dto';
import { UpdateCollectionDto } from '../dto/updateCollection.dto';
import { Collection } from '../entity/collection.entity';

export interface ICollectionService {
  createCollection: (
    createCollectionDto: CreateCollectionDto,
  ) => Promise<Collection>;

  updateCollection: (
    collectionId: number,
    updateCollectionDto: UpdateCollectionDto,
  ) => Promise<Collection>;
}
