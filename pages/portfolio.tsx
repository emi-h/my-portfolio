import React from "react";
import { NextPage } from "next";
import { PortfolioContent } from "../components/PortfolioContent/PortfolioContent";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const Portfolio: NextPage = () => {
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
              <PortfolioContent />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
