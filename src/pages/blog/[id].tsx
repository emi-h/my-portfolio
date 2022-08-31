import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { BlogDetailContent } from "src/components/BlogDetailContent/BlogDetailContent";
import { client } from "src/libs/client";
import styles from "src/styles/Home.module.css";
import { Blog } from "src/type/type";

type Props = Blog & MicroCMSContentId & MicroCMSDate;

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "blog" });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    fallback: false,
    paths: ids,
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
    contentId: ctx.params.id,
    endpoint: "blog",
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
