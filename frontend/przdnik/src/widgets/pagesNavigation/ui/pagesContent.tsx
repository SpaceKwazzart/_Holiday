import { NavigationRow } from '../../../shared/ui/navigation/navigationRow/index';
import { FiColumns, FiCalendar, FiHome, FiSearch } from "react-icons/fi";
import style from './pagesContent.module.scss';

interface PagesContentProps {
  iconSize: number;
}

export const PagesContent: React.FC<PagesContentProps>  = ({
  iconSize,
}) => {
  return (
    <div className={style.container}>
      <NavigationRow link='/'>
        <FiHome size={iconSize}/>
        <p>Home</p>
      </NavigationRow>

      <NavigationRow link='/search'>
        <FiSearch size={iconSize}/>
        <p>Search</p>
      </NavigationRow>

      <NavigationRow link='/collection'>
        <FiColumns size={iconSize}/>
        <p>Collection</p>
      </NavigationRow>
      
      <NavigationRow link='/calendar'>
        <FiCalendar size={iconSize}/>
        <p>Calendar</p>
      </NavigationRow>
    </div>
  );
}
 