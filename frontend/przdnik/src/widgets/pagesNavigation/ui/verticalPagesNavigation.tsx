import { VerticalNavigationContainer } from 'shared/ui';
import { PagesContent } from './pagesContent';
// import style from './pagesNavigation.module.scss';

interface VerticalPagesNavigationProps {
  iconSize: number;
}

export const VerticalPagesNavigation: React.FC<VerticalPagesNavigationProps>  = ({
  iconSize,
}) => {
  return (
    <VerticalNavigationContainer>
      <PagesContent iconSize={iconSize}/>
    </VerticalNavigationContainer>
  );
}
 