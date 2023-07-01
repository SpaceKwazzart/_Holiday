import style from './headerLayout.module.scss';

interface HeaderLayoutProps {
  children: React.ReactNode;
  classname?:  string;
}

export const HeaderLayout: React.FC<HeaderLayoutProps> = ({
  children,
  classname
}) => {
  return (
    <header className={`${style.header} ${classname}`}>
      {children}
    </header>
  );
}
