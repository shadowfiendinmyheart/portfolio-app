import React from "react";
import Button from "../Button";
import Card from "../Card";

import styles from "./CardGrid.module.css";

const CardsGrid = () => {
  const handleButtonClick = () => {
    console.log("click");
  };

  return (
    <>
      <div className={styles.grid}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className={styles.buttonWrapper}>
        <Button onClick={handleButtonClick}>LOAD MORE</Button>
      </div>
    </>
  );
};

export default CardsGrid;
