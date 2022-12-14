import React from "react";
import { FC } from "react";

import styles from "./AboutContent.module.css";

export const AboutContent: FC = () => {
  return (
    <>
      <div className={styles.aboutContent}>
        <h3>Emi H</h3>
        <p>
          ITエンジニア。大阪にてWeb制作フリーランスとして活動中。React/TypeScriptを使用したアプリを開発中。
        </p>
      </div>
    </>
  );
};
