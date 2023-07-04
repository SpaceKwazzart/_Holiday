import { SidebarBlockLayout } from "shared/ui";
import SubscribeCollection from "features/subscribeCollection";
import { CollectionRow } from "entities/collection";
import style from './subscribeCollectionBlock.module.scss';

const mockRows = [
  {
    id: 1,
    name: "Subscribe Collection 1",
    order: 1,
  },
  {
    id: 2,
    name: "Subscribe Collection 2",
    order: 2,
  },
  {
    id: 3,
    name: "Subscribe Collection 3",
    order: 3,
  },
  {
    id: 4,
    name: "Subscribe Collection 4",
    order: 4,
  },
  {
    id: 5,
    name: "Subscribe Collection 5",
    order: 5,
  },
]

export const SubscribeCollectionBlock = () => {
  return (
    <SidebarBlockLayout>
      <h2 className={style.text}>Subcribe Collection</h2>
      <div className={style.collectionContainer}>
      {mockRows.map(item => {
        return <CollectionRow key={item.id} features={<SubscribeCollection collectionId={item.id}/>} collectionId={item.id} >{item.name}</CollectionRow>
      })}
      </div>
    </SidebarBlockLayout>
  );
}
 