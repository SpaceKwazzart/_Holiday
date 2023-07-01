import { FiChevronRight } from 'react-icons/fi';
import { Button } from 'shared/ui/button/index';

interface InspectCollectionProps {
  collectionId: number;
}

export const InspectCollection: React.FC<InspectCollectionProps> = ({
  collectionId
}) => {
  const onClick = () => {
    alert(`inspect button ${collectionId}`);
  }

  return (
    <Button onClick={onClick}><FiChevronRight size={22}/></Button>
  );
}
 

