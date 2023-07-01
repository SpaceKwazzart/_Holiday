import { HorizontalNavigationContainer } from 'shared/ui';
import { PagesContent } from './pagesContent';
import style from './horizontalPagesNavigation.module.scss';

interface HorizontalPagesNavigationProps {
  iconSize: number;
}

export const HorizontalPagesNavigation: React.FC<HorizontalPagesNavigationProps>  = ({
  iconSize,
}) => {
  return (
    <HorizontalNavigationContainer className={style.container}>
      <PagesContent iconSize={iconSize}/>
    </HorizontalNavigationContainer>
  );
}