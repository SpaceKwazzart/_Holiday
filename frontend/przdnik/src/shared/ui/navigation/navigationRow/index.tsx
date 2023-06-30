import React from "react";
import { NavLink } from "react-router-dom";
import style from "./navigationRow.module.scss"

interface NavigationRowProps {
  children: React.ReactNode;
  link: string;
}

export const NavigationRow: React.FC<NavigationRowProps> = ({
  children,
  link
}) => {
  return (
    <NavLink to={link} className={({ isActive }) => {
      return isActive ? `${style.active} ${style.row}` : style.row; 
    }}>
      {children}
    </NavLink>
  );
}
 