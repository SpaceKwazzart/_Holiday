import React from 'react';
import style from './verticalNavigationContainer.module.scss';

interface VerticalNavigationContainerProps {
  children: React.ReactNode | React.ReactNode[];
  classname?: string;
}

export const VerticalNavigationContainer: React.FC<VerticalNavigationContainerProps> = ({
  children,
  classname,
}) => {
  return (
    <nav className={`${style.nav} ${classname}`}>
      <ul className={style.list}>
        {React.Children.map(children, (child, index) => {
          return <li key={index}>{child}</li>
        })}
      </ul>
    </nav>
  );
}
