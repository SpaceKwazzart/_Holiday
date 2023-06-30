import { SidebarLayout } from 'shared/ui';
import { NavigationContainer } from '../../../shared/ui/navigation/navigationContainer/index';
import { NavigationRow } from '../../../shared/ui/navigation/navigationRow/index';
import { FiHome, FiSearch, FiColumns, FiCalendar } from "react-icons/fi";
import style from './sidebar.module.scss';

export const Sidebar = () => {
  const iconSize = 28;

  return (
    <SidebarLayout>
      <NavigationContainer classname={`${style.sidebarElement} ${style.navElement}`}>
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
      </NavigationContainer>

      <div className={style.sidebarElement}>
        Создать коллекцию праздников +
        Мои коллекции
      </div>

      <div className={style.sidebarElement}>
        Подпишись на крутые коллекции прадзников!
        Обзор
      </div>

      <footer className={`${style.sidebarElement} ${style.footer}`}>
        Оставить feedback молодому продукту :3
      </footer>
    </SidebarLayout>
  );
}
