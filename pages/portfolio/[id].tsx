import React from "react";
import { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import { PortfolioDetailContent } from "../../components/PortfolioDetailContent/PortfolioDetailContent";

const Post: NextPage = () => {
  return (
    <>
      <Head>
        <title>Emi H | PortFolio title</title>
        <meta name="description" content="Emi H's portfolio detail" />
      </Head>
      <section>
        <div className={styles.content}>
          <div className={styles.content_inner}>
            <PortfolioDetailContent />
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
