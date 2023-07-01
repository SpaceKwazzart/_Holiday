import React from 'react';
import style from './horizontalNavigationContainer.module.scss';

interface HorizontalNavigationContainerProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const HorizontalNavigationContainer: React.FC<HorizontalNavigationContainerProps> = ({
  children,
  className,
}) => {
  return (
    <nav className={`${style.nav} ${className}`}>
      {React.Children.map(children, (child, index) => (
        <ul className={style.list}>
          {child}
        </ul>
      ))}
    </nav>
  );
};
