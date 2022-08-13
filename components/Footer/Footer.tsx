import React from "react";
import { FC } from "react";
import styles from "./Footer.module.css";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <small>&copy; 2022 Emi H</small>
    </footer>
  );
};
