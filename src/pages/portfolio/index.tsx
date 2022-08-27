import React from "react";
import { GetStaticProps, NextPage } from "next";
import { PortfolioContent } from "src/components/PortfolioContent/PortfolioContent";
import styles from "src/styles/Home.module.css";
import Head from "next/head";
import { Portfolio } from "src/type/type";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { client } from "src/libs/client";

type Props = MicroCMSListResponse<Portfolio>;

// ブログ情報を取得
export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Portfolio>({ endpoint: "portfolio" });
  return {
    props: data,
  };
};

const Portfolio: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Emi H | Portfolio</title>
        <meta name="description" content="Emi H's portfolio" />
      </Head>
      <div className={styles.content}>
        <div className={styles.content_inner}>
          <section className={styles.portfolio} id="portfolio">
            <h2>portfolio</h2>
            <div className={styles.portfolio_body}>
              <PortfolioContent props={props} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
