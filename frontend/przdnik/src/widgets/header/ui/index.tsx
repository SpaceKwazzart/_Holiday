import { HeaderLayout } from "shared/ui/headerLayout";
import style from './header.module.scss';
import { HorizontalPagesNavigation } from "widgets/pagesNavigation";

export const Header = () => {
  return (
    <HeaderLayout classname={style.header}>
      <h3>Header</h3>
      <HorizontalPagesNavigation iconSize={28}/>
      <h3>Profile</h3>
    </HeaderLayout>
  );
}
 