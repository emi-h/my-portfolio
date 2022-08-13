import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Mv } from "src/components/Mv/Mv";
import { BlogContent } from "../components/BlogContent/BlogContent";
import { PortfolioContent } from "../components/PortfolioContent/PortfolioContent";
import { Twitter } from "../components/Twitter/Twitter";
import { CodeContent } from "../components/CodeContent/CodeContent";
import { Btn } from "../components/Btn/Btn";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Emi H | Top</title>
        <meta name="description" content="Emi H portfolio top page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Mv />
      <div className={styles.content}>
        <div className={styles.content_inner}>
          <section className={styles.blog} id="blog">
            <h2>blog</h2>
            <div className={styles.blog_body}>
              <BlogContent />
              <Btn text="view all" url="/blog" />
            </div>
          </section>
          <section className={styles.portfolio} id="portfolio">
            <h2>portfolio</h2>
            <div className={styles.portfolio_body}>
              <PortfolioContent />
              <Btn text="view all" url="/portfolio" />
            </div>
          </section>
          <div className={styles.wrapper_gitTw}>
            <CodeContent />
            <Twitter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
