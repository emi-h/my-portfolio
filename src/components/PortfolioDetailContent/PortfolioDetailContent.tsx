import Image from "next/image";
import React from "react";
import { FC } from "react";
import styles from "src/components/PortfolioDetailContent/PortfolioDetailContent.module.css";

export const PortfolioDetailContent: FC<any> = (props) => {
  const portfolio_data = props.props;
  const thum = portfolio_data.imgUrl.url;
  return (
    <section className={styles.PortfolioDetailContent} id="blog">
      <h2>{portfolio_data.title}</h2>
      <div className={styles.PortfolioDetailContent_body}>
        <figure>
          <Image src={thum} alt="thumbnail" layout="fill" objectFit="cover" />
        </figure>
        <div>{portfolio_data.text}</div>
        <time dateTime={portfolio_data.date}>{portfolio_data.date}</time>
      </div>
    </section>
  );
};
