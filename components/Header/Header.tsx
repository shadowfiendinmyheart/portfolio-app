import React from "react";
import Image from "next/image";
import Navigation from "../Navigation";
import logoPic from "../../public/logo.svg";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image src={logoPic} alt="logo" />
          <span className={styles["logo-text"]}>Agency</span>
        </div>
        <Navigation />
        <button className={styles.contact}>CONTACT</button>
      </div>
      <h1 className={styles.heading}>Portfolio</h1>
      <p className={styles.about}>
        Agency provides a full service range including technical skills, design,
        business understanding.
      </p>
    </header>
  );
};

export default Header;
