import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { PortfolioDetailContent } from "src/components/PortfolioDetailContent/PortfolioDetailContent";
import { client } from "src/lib/client";
import styles from "src/styles/Home.module.css";
import { Portfolio } from "src/type/type";

type Props = Portfolio & MicroCMSContentId & MicroCMSDate;

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "portfolio" });
  const ids = data.contents.map((content) => `/portfolio/${content.id}`);
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

  const data = await client.getListDetail<Portfolio>({
    contentId: ctx.params.id,
    endpoint: "portfolio",
  });

  return {
    props: data,
  };
};

const Post: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Emi H | {props.title}</title>
        <meta name="description" content="Emi H's portfolio detail" />
      </Head>
      <section>
        <div className={styles.content}>
          <div className={styles.content_inner}>
            <PortfolioDetailContent portfolioData={props} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
