import React from "react";
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
      style={isActive ? { outline: "7px solid #4FE24A" } : {}}
      className={styles.wrapper}
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
