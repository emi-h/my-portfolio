import React from "react";
import { BlogContent } from "../components/BlogContent/BlogContent";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Head from "next/head";

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
          </section>
        </div>
      </div>
    </>
  );
};

export default Blog;
