import { LeaveFeedback } from 'features/leaveFeedback/index';
import style from './feedbackBlock.module.scss';

export const FeedbackBlock = () => {
  return (
    <aside className={style.container}>
      <p className={style.text}>Leave feedback for young product!</p>
      <LeaveFeedback/>
    </aside>
  );
}
 