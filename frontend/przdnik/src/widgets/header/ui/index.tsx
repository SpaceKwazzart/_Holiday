import { HeaderLayout } from "shared/ui/headerLayout";
import { HorizontalPagesNavigation } from "widgets/pagesNavigation";
import { SignUp } from 'features/signUp/index';
import { SignIn } from 'features/signIn/index';

import style from './header.module.scss';
import { QuickSearch } from '../../../features/quickSearch/ui/index';

export const Header = () => {
  return (
    <HeaderLayout classname={style.header}>
      <QuickSearch placeHolder="you can find anything!" className={style.search}>
        Quick Search :3
      </QuickSearch>
      <HorizontalPagesNavigation className={style.mobileNav} iconSize={28}/>
      <aside className={style.loginContainer}>
        <SignUp/>
        <SignIn/>
      </aside>
    </HeaderLayout>
  );
}
