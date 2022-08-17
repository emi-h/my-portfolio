import React from "react";
import Head from "next/head";
import { Loader } from "@mantine/core";
import { BlogContent } from "src/components/BlogContent/BlogContent";
import { NextPage } from "next";
import styles from "src/styles/Home.module.css";

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Emi H | Blog</title>
        <meta name="description" content="Emi H's blog" />
      </Head>
      <div className={styles.content}>
        <div className={styles.content_inner}>
          <section className={styles.blog} id="blog">
            <h2>blog</h2>
            <div className={styles.blog_body}>
              <BlogContent />
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
