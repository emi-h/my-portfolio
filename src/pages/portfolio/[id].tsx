import React from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { client } from "src/libs/client";
import { PortfolioDetailContent } from "../../components/PortfolioDetailContent/PortfolioDetailContent";

import { Portfolio } from "src/type/type";

import styles from "../../styles/Home.module.css";

type Props = Portfolio & MicroCMSContentId & MicroCMSDate;

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "portfolio" });
  const ids = data.contents.map((content) => `/portfolio/${content.id}`);
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

  const data = await client.getListDetail<Portfolio>({
    endpoint: "portfolio",
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
