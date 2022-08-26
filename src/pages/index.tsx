import React from "react";
import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { client } from "src/libs/client";
import { MicroCMSListResponse } from "microcms-js-sdk";
import styles from "src/styles/Home.module.css";
import { Mv } from "src/components/Mv/Mv";
import { BlogContent } from "src/components/BlogContent/BlogContent";
import { PortfolioContent } from "src/components/PortfolioContent/PortfolioContent";
import { Twitter } from "src/components/Twitter/Twitter";
import { CodeContent } from "src/components/CodeContent/CodeContent";
import { Btn } from "src/components/Btn/Btn";
import { Blog } from "src/type/type";

type Props = MicroCMSListResponse<Blog>;
// ブログ情報を取得
export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({
    endpoint: "blog",
    // 取得記事数5個に制限
    queries: { limit: 5 },
  });
  return {
    props: data,
  };
};

const Home: NextPage<Props> = (props) => {
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
              <BlogContent props={props} />
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
