import { SidebarBlockLayout } from "shared/ui";
import AddCollection from 'features/addCollection/index';
import { InspectCollection } from "features/inspectCollection";
import { CollectionRow } from "entities/collection";
import style from './collectionBlock.module.scss';

const mockRows = [
  {
    id: 1,
    name: "Collection 1",
    order: 1,
  },
  {
    id: 2,
    name: "Collection 2",
    order: 2,
  },
  {
    id: 3,
    name: "Collection 3",
    order: 3,
  },
  {
    id: 4,
    name: "Collection 4",
    order: 4,
  },
  {
    id: 5,
    name: "Collection 5",
    order: 5,
  },
]

export const CreateCollectionBlock = () => {
  return (
    <SidebarBlockLayout>
      <AddCollection/>
      <div className={style.collectionContainer}>
      {mockRows.map(item => {
        return <CollectionRow key={item.id} features={<InspectCollection collectionId={item.id}/>} collectionId={item.id} >{item.name}</CollectionRow>
      })}
      </div>
    </SidebarBlockLayout>
  );
}
 