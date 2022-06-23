import React from "react";
import classnames from "classnames";
import Image from "next/image";
import { SWITCHER_MODE } from "../../interfaces/switcher";

import styles from "./Card.module.css";

interface CardProps {
  image: string;
  badgeName: SWITCHER_MODE;
  title: string;
  isActive: boolean;
  onCardClick: (value: string) => void;
  onBadgeClick: (value: SWITCHER_MODE) => void;
}

const Card: React.FC<CardProps> = ({
  image,
  badgeName,
  title,
  isActive,
  onCardClick,
  onBadgeClick,
}) => {
  const handleCardClick = () => {
    onCardClick(title);
  };

  const handleBadgeClick = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    event.stopPropagation();

    onBadgeClick(badgeName);
  };

  return (
    <div
      className={classnames(styles.wrapper, isActive && styles.active)}
      onClick={handleCardClick}
    >
      <div className={styles.background}>
        <Image src={image} layout="fill" alt={title} />
      </div>
      <span onClick={handleBadgeClick} className={styles.badge}>
        {badgeName}
      </span>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default Card;
