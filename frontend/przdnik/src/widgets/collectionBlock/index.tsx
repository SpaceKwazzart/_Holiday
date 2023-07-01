import { SidebarBlockLayout } from "shared/ui";
// import style from './collectionBlock.module.scss';
import AddCollection from '../../features/addCollection/index';
import { InspectCollection } from "features/inspectCollection";
import { CollectionRow } from "entities/collection";

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
  {
    id: 6,
    name: "Collection 6",
    order: 6,
  },
]

export const CollectionBlock = () => {
  return (
    <SidebarBlockLayout>
      <AddCollection/>
      {mockRows.map(item => {
        return <CollectionRow features={<InspectCollection collectionId={item.id}/>} collectionId={item.id} >item.name</CollectionRow>
      })}
    </SidebarBlockLayout>
  );
}
 