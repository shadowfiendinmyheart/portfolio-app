import React from "react";
import { useWidth } from "../../hooks/useWidth";
import Select from "../Select";
import { SWITCHER_MODE } from "../../interfaces/switcher";
import { MOBILE_MODE } from "../../constants";

import styles from "./Switcher.module.css";

const Switcher = () => {
  const { width } = useWidth();
  const tabs = Object.values(SWITCHER_MODE);

  const changeTabHandler = (mode: string) => {
    console.log("mode", mode);
  };

  return width > MOBILE_MODE ? (
    <ul className={styles.list}>
      {tabs.map((tab) => {
        return (
          <li
            onClick={() => changeTabHandler(tab)}
            style={true && { color: "#16CD53" }}
            className={styles.item}
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
