import React from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { client } from "src/libs/client";
import { BlogDetailContent } from "../../components/BlogDetailContent/BlogDetailContent";

import { Blog } from "src/type/type";
import styles from "../../styles/Home.module.css";

type Props = Blog & MicroCMSContentId & MicroCMSDate;

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "blog" });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  ctx
) => {
  if (!ctx.params) {
    return {
      notFound: true,
    };
  }

  const data = await client.getListDetail<Blog>({
    endpoint: "blog",
    contentId: ctx.params.id,
  });

  return {
    props: data,
  };
};

const Post: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Emi H | Blogtitle</title>
        <meta name="description" content="Emi H's blog detail" />
      </Head>
      <section>
        <div className={styles.content}>
          <div className={styles.content_inner}>
            <BlogDetailContent blogData={props} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
