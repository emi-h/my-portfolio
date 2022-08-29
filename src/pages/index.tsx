import React from "react";
import Head from "next/head";
import type { NextPage, GetStaticProps } from "next";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { client } from "src/libs/client";

import { Mv } from "src/components/Mv/Mv";
import { BlogContent } from "src/components/BlogContent/BlogContent";
import { PortfolioContent } from "src/components/PortfolioContent/PortfolioContent";
import { Twitter } from "src/components/Twitter/Twitter";
import { CodeContent } from "src/components/CodeContent/CodeContent";
import { Btn } from "src/components/Btn/Btn";
import styles from "src/styles/Home.module.css";

import { Blog, Portfolio } from "src/type/type";

export const getStaticProps: GetStaticProps = async () => {
  // ブログ情報取得
  const blog_data = await client.getList<Blog>({
    endpoint: "blog",
    queries: { limit: 5 },
  });

  // ポートフォリオ情報取得
  const portfolio_data = await client.getList<Portfolio>({
    endpoint: "portfolio",
    queries: { limit: 6 },
  });

  return {
    props: {
      blog_data: blog_data,
      portfolio_data: portfolio_data,
    },
  };
};

const Home: NextPage<{
  blog_data: MicroCMSListResponse<Blog>;
  portfolio_data: MicroCMSListResponse<Portfolio>;
}> = ({ blog_data, portfolio_data }) => {
  return (
    <>
      <Head>
        <title>Emi H | Top</title>
        <meta name="description" content="Emi H portfolio top page" />
      </Head>

      <Mv />
      <div className={styles.content}>
        <div className={styles.content_inner}>
          <section className={styles.blog} id="blog">
            <h2>blog</h2>
            <div className={styles.blog_body}>
              <BlogContent blogArray={blog_data.contents} />
              <Btn text="view all" url="/blog" />
            </div>
          </section>
          <section className={styles.portfolio} id="portfolio">
            <h2>portfolio</h2>
            <div className={styles.portfolio_body}>
              <PortfolioContent portfolioArray={portfolio_data.contents} />
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
