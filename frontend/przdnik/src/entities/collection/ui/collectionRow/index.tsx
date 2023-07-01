import { Row } from "shared/ui";
import style from './collectionRow.module.scss';
import React from "react";

interface CollectionRowProps {
  children: React.ReactNode;
  collectionId: number;
  features?: React.ReactNode[] | React.ReactNode;
}

export const CollectionRow: React.FC<CollectionRowProps> = ({
  children,
  features,
}) => {
  return (
    <Row className={style.container}>
      <p>{children}</p>
      {React.Children.map(features, (child) => {
        return child
      })}
    </Row>
  );
}
 