import { SidebarLayout } from 'shared/ui';
import { VerticalPagesNavigation } from 'widgets/pagesNavigation';
import style from './sidebar.module.scss';
import { FeedbackBlock } from '../../feedbackBlock/index';
import { CreateCollectionBlock } from 'widgets/createCollectionBlock';
import { SubscribeCollectionBlock } from 'widgets/subscribeCollectionBlock';

export const Sidebar = () => {

  return (
    <SidebarLayout>
      <VerticalPagesNavigation iconSize={28}/>

      <CreateCollectionBlock/>

      <SubscribeCollectionBlock/>

      <footer className={`${style.sidebarElement} ${style.footer}`}>
        <FeedbackBlock/>
      </footer>
    </SidebarLayout>
  );
}
