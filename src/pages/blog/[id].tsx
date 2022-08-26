import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { BlogDetailContent } from "../../components/BlogDetailContent/BlogDetailContent";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import { client } from "src/libs/client";
import { Blog } from "src/type/type";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";

type Props = Blog & MicroCMSContentId & MicroCMSDate;

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
            <BlogDetailContent props={props} />
          </div>
        </div>
      </section>
    </>
  );
};

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

export default Post;
