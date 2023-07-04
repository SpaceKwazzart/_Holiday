import { Row } from "shared/ui";
import React from "react";
import { FiThermometer } from "react-icons/fi";
import style from './collectionRow.module.scss';

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
      <FiThermometer/>
      <p>{children}</p>
      {React.Children.map(features, (child) => {
        return  (
          <div className={style.button}>
            {child}
          </div>
          )
      })}
    </Row>
  );
}
 