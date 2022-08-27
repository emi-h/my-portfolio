import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import { PortfolioDetailContent } from "../../components/PortfolioDetailContent/PortfolioDetailContent";
import { client } from "src/libs/client";
import { Portfolio } from "src/type/type";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";

type Props = Portfolio & MicroCMSContentId & MicroCMSDate;

const Post: NextPage<Props> = (props) => {
  console.log("props", props);

  return (
    <>
      <Head>
        <title>Emi H | PortFolio title</title>
        <meta name="description" content="Emi H's portfolio detail" />
      </Head>
      <section>
        <div className={styles.content}>
          <div className={styles.content_inner}>
            <PortfolioDetailContent props={props} />
          </div>
        </div>
      </section>
    </>
  );
};

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

export default Post;
