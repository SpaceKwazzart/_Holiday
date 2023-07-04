import { HorizontalNavigationContainer } from 'shared/ui';
import { PagesContent } from './pagesContent';
import style from './horizontalPagesNavigation.module.scss';

interface HorizontalPagesNavigationProps {
  iconSize: number;
  className?: string;
}

export const HorizontalPagesNavigation: React.FC<HorizontalPagesNavigationProps>  = ({
  iconSize,
  className
}) => {
  return (
    <HorizontalNavigationContainer className={`${style.container} ${className}`}>
      <PagesContent iconSize={iconSize}/>
    </HorizontalNavigationContainer>
  );
}