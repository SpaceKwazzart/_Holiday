import React from "react";
import style from "./sidebarLayout.module.scss";

interface SidebarLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  children
}) => {
  return (
    <aside className={`${style.container}`}>
      {children}
    </aside>
  );
}
