import { HeaderLayout } from "shared/ui/headerLayout";
import style from './header.module.scss';
import { HorizontalPagesNavigation } from "widgets/pagesNavigation";
import { FiUser } from "react-icons/fi";

export const Header = () => {
  return (
    <HeaderLayout classname={style.header}>
      <HorizontalPagesNavigation iconSize={28}/>
      <FiUser className={style.avatar} size={28}/>
    </HeaderLayout>
  );
}
