import React from "react";

import styles from "./Card.module.css";

interface CardProps {
  image: typeof Image;
  badgeName: string;
  title: string;
  isActive: boolean;
  onCardClick: () => void;
  onBadgeClick: () => void;
}

const Card = () => {
  return (
    <div
      style={true && { border: "7px solid #4FE24A" }}
      className={styles.wrapper}
    >
      <span className={styles.badge}>Branding</span>
      <h2 className={styles.title}>KeyBoard</h2>
    </div>
  );
};

export default Card;
