import { Button } from 'shared/ui';
import { FiPlus } from "react-icons/fi";
import style from './subscribeCollection.module.scss';

interface SubscribeCollectionProps {
  collectionId: number;
} 

const SubscribeCollection: React.FC<SubscribeCollectionProps> = ({
  collectionId,
}) => {
  const onClick = () => {
    alert(`Subscribe collection ${collectionId}`);
  }

  return (
    <Button onClick={onClick} classname={style.button}><FiPlus size={28}/></Button>
  );
}
 
export default SubscribeCollection;