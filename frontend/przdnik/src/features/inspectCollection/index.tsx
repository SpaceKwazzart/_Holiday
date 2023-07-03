import { FiChevronRight } from 'react-icons/fi';
import { Button } from 'shared/ui/button/index';
import style from './inspectCollection.module.scss';

interface InspectCollectionProps {
  collectionId: number;
}

export const InspectCollection: React.FC<InspectCollectionProps> = ({
  collectionId,
}) => {
  const onClick = () => {
    alert(`inspect button ${collectionId}`);
  }

  return (
    <Button classname={style.button} onClick={onClick}><FiChevronRight size={22}/></Button>
  );
}
 

