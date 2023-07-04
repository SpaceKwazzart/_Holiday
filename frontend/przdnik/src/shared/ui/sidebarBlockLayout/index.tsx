import style from './sidebarBlockLayout.module.scss';

interface SidebarBlockLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const SidebarBlockLayout: React.FC<SidebarBlockLayoutProps> = ({
  children,
  className,
}) => {
  return (
    <aside className={`${style.container} ${className}`}>
      {children}
    </aside>
  );
}
 