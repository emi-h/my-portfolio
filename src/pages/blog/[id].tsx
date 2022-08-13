import React from "react";
import { NextPage } from "next";
import { BlogDetailContent } from "../../components/BlogDetailContent/BlogDetailContent";
import styles from "../../styles/Home.module.css";
import Head from "next/head";

const Post: NextPage = () => {
  return (
    <>
      <Head>
        <title>Emi H | Blogtitle</title>
        <meta name="description" content="Emi H's blog detail" />
      </Head>
      <section>
        <div className={styles.content}>
          <div className={styles.content_inner}>
            <BlogDetailContent />
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
