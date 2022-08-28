import React from "react";
import Head from "next/head";
import { Loader } from "@mantine/core";
import { BlogContent } from "src/components/BlogContent/BlogContent";
import { GetStaticProps, NextPage } from "next";
import styles from "src/styles/Home.module.css";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { client } from "src/libs/client";
import { Blog } from "src/type/type";

type Props = MicroCMSListResponse<Blog>;

// ブログ情報を取得
export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({ endpoint: "blog" });
  return {
    props: data,
  };
};

const Blog: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Emi H | Blog一覧</title>
        <meta name="description" content="Emi H's blog" />
      </Head>
      <div className={styles.content}>
        <div className={styles.content_inner}>
          <section className={styles.blog} id="blog">
            <h2>blog</h2>
            <div className={styles.blog_body}>
              <BlogContent blogArray={props.contents} />
            </div>
            <div className={styles.center}>
              <Loader color="pink" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Blog;
