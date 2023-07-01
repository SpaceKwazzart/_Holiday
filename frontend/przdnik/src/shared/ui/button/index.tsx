import { MouseEventHandler } from 'react';
import style from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: MouseEventHandler;
  classname?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick = () => alert("default"),
  classname,
}) => {
  return (
    <button onClick={onClick}
     className={`${classname} ${style.button}`}
     >
      {children}
    </button>
  );
}
 