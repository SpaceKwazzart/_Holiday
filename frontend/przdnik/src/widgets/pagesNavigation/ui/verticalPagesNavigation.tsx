import { VerticalNavigationContainer } from 'shared/ui';
import { PagesContent } from './pagesContent';
import style from './verticalPagesNavigation.module.scss';

interface VerticalPagesNavigationProps {
  iconSize: number;
}

export const VerticalPagesNavigation: React.FC<VerticalPagesNavigationProps>  = ({
  iconSize,
}) => {
  return (
    <VerticalNavigationContainer classname={style.container}>
      <PagesContent iconSize={iconSize}/>
    </VerticalNavigationContainer>
  );
}
 