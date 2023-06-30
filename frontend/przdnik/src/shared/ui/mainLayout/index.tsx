import style from './mainLayout.module.scss';

interface MainLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  header: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  sidebar,
  header,
}) => {
  return (
    <div className={style.container}>
      {sidebar}
      <div className={style.pageContainer}>
        <header className={style.header}>
          {header}
        </header>

        <main className={style.main}>
          {children}
        </main>
      </div>
    </div>
  );
}

