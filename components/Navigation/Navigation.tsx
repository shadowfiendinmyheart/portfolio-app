import React from "react";
import Link from "next/link";

import styles from "./Navigation.module.css";

export interface NavigationItem {
  name: string;
  path: string;
}

const navigationItems: NavigationItem[] = [
  {
    name: "About",
    path: "#",
  },
  {
    name: "Services",
    path: "#",
  },
  {
    name: "Pricing",
    path: "#",
  },
  {
    name: "Blog",
    path: "#",
  },
];

const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        {navigationItems.map((item) => {
          return (
            <li key={item.name + item.path}>
              <Link href={item.path}>
                <a className={styles.item}>{item.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
