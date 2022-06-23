import React from "react";
import { MOBILE_MODE } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { useWidth } from "../../hooks/useWidth";
import { SWITCHER_MODE } from "../../interfaces/switcher";
import { cardSlice } from "../../store/reducers/CardsStore";
import Button from "../Button";
import Card from "../Card";

import styles from "./CardGrid.module.css";

const CardsGrid = () => {
  const { width } = useWidth();
  const { currentCards } = useAppSelector((state) => state.cardSlice);
  const { pickCard, changeMode, loadMoreCards } = cardSlice.actions;

  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(loadMoreCards());
  };

  const handleBadgeClick = (value: SWITCHER_MODE) => {
    dispatch(changeMode(value));
  };

  const handleCardClick = (value: string) => {
    if (width > MOBILE_MODE) {
      dispatch(pickCard(value));
    }
  };

  return (
    <>
      <div className={styles.grid}>
        {currentCards.map((card) => {
          return (
            <Card
              title={card.title}
              badgeName={card.mode}
              image={card.imagePath}
              isActive={card.isActive}
              onBadgeClick={handleBadgeClick}
              onCardClick={handleCardClick}
              key={card.title}
            />
          );
        })}
      </div>
      <div className={styles.buttonWrapper}>
        <Button onClick={handleButtonClick}>LOAD MORE</Button>
      </div>
    </>
  );
};

export default CardsGrid;
