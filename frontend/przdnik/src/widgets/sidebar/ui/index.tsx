import { SidebarLayout } from 'shared/ui';
import { VerticalPagesNavigation } from 'widgets/pagesNavigation';
import style from './sidebar.module.scss';
import { FeedbackBlock } from '../../feedbackBlock/index';
import { CollectionBlock } from '../../collectionBlock/index';

export const Sidebar = () => {

  return (
    <SidebarLayout>
      <VerticalPagesNavigation iconSize={28}/>

      <CollectionBlock/>
      
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
