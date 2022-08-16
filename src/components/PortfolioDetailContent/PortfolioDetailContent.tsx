import Image from "next/image";
import React from "react";
import { FC } from "react";
import ThumbnailImg from "public/test_thumbnail.jpg";
import styles from "PortfolioDetailContent.module.css";

export const PortfolioDetailContent: FC = () => {
  return (
    <section className={styles.PortfolioDetailContent} id="blog">
      <h2>IT KINGDOM</h2>
      <div className={styles.PortfolioDetailContent_body}>
        <figure>
          <Image
            src={ThumbnailImg}
            alt="thumbnail"
            layout="fill"
            objectFit="cover"
          />
        </figure>
        <time dateTime="2021.10 - 2021.12">2021.10 - 2021.12</time>
        <p>
          当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
        </p>
      </div>
    </section>
  );
};
