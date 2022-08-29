import Image from "next/image";
import React from "react";
import { FC } from "react";
import styles from "src/components/PortfolioDetailContent/PortfolioDetailContent.module.css";
import { Portfolio } from "src/type/type";

export const PortfolioDetailContent: FC<{ portfolioData: Portfolio }> = ({
  portfolioData,
}) => {
  return (
    <section className={styles.PortfolioDetailContent} id="blog">
      <h2>{portfolioData.title}</h2>
      <div className={styles.PortfolioDetailContent_body}>
        <figure>
          <Image
            src={portfolioData.imgUrl.url}
            alt="thumbnail"
            layout="fill"
            objectFit="cover"
          />
        </figure>
        <div dangerouslySetInnerHTML={{ __html: portfolioData.text }}></div>
        <time
          dateTime={new Date(portfolioData.date).toLocaleDateString("ko-KR")}
        >
          {new Date(portfolioData.date).toLocaleDateString("ko-KR")}
        </time>
      </div>
    </section>
  );
};
