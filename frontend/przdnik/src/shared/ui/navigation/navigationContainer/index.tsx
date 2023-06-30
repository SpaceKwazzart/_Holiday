import React from 'react';
import style from './navigationContainer.module.scss';

interface NavigationProps {
  children: React.ReactNode | React.ReactNode[];
  classname?: string;
}

export const NavigationContainer: React.FC<NavigationProps> = ({
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
