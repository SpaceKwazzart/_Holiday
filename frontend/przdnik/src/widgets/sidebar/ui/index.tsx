import { SidebarLayout } from 'shared/ui';
import { VerticalPagesNavigation } from 'widgets/pagesNavigation';
import style from './sidebar.module.scss';
import { FeedbackBlock } from '../../feedbackBlock/index';

export const Sidebar = () => {

  return (
    <SidebarLayout>
      <VerticalPagesNavigation iconSize={28}/>

      <div className={style.sidebarElement}>
        Создать коллекцию праздников +
        Мои коллекции
      </div>

      <div className={style.sidebarElement}>
        Подпишись на крутые коллекции прадзников!
        Обзор
      </div>

      <footer className={`${style.sidebarElement} ${style.footer}`}>
        <FeedbackBlock/>
      </footer>
    </SidebarLayout>
  );
}
