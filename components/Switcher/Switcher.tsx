import React from "react";
import classnames from "classnames";
import Select from "../Select";
import { useWidth } from "../../hooks/useWidth";
import { cardSlice } from "../../store/reducers/CardsStore";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { SWITCHER_MODE } from "../../interfaces/switcher";
import { MOBILE_MODE } from "../../constants";

import styles from "./Switcher.module.css";

const Switcher = () => {
  const { currentMode } = useAppSelector((state) => state.cardSlice);
  const { changeMode } = cardSlice.actions;
  const dispatch = useAppDispatch();
  const { width } = useWidth();
  const tabs = Object.values(SWITCHER_MODE);

  const changeTabHandler = (mode: SWITCHER_MODE) => {
    dispatch(changeMode(mode));
  };

  return width > MOBILE_MODE ? (
    <ul className={styles.list}>
      {tabs.map((tab) => {
        return (
          <li
            onClick={() => changeTabHandler(tab)}
            className={classnames(
              styles.item,
              currentMode === tab && styles.active
            )}
            key={tab}
          >
            {tab}
          </li>
        );
      })}
    </ul>
  ) : (
    <Select options={tabs} onChange={changeTabHandler} />
  );
};

export default Switcher;
