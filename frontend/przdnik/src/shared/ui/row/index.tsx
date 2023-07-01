import style from './row.module.scss';

interface RowProps {
  children: React.ReactNode;
  className?: string;
}

export const Row: React.FC<RowProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`${style.row} ${className}`}>
      {children}
    </div>
  );
}
 