import React from "react";
import { FC } from "react";
import styles from "src/components/Btn/Btn.module.css";

type BtnProps = {
  text: string;
  url: string;
};

export const Btn: FC<BtnProps> = (props) => {
  return (
    <div className={styles.btn_wrapper}>
      <a className={styles.btn} href={props.url}>
        {props.text}
      </a>
    </div>
  );
};
