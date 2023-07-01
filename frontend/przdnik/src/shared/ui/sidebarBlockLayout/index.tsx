import style from './sidebarBlockLayout.module.scss';

interface SidebarBlockLayoutProps {
  children: React.ReactNode;
}

export const SidebarBlockLayout: React.FC<SidebarBlockLayoutProps> = ({
  children,
}) => {
  return (
    <aside className={style.container}>
      {children}
    </aside>
  );
}
 