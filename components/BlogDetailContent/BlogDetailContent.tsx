import React from "react";
import { FC } from "react";
import styles from "src/components/BlogDetailContent/BlogDetailContent.module.css";

export const BlogDetailContent: FC = () => {
  return (
    <section className={styles.blogDetail} id="blog">
      <h2>This is a header</h2>
      <div className={styles.blogDetail_body}>
        <time dateTime="2022.07.11">2022.07.11</time>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.{" "}
        </p>
      </div>
    </section>
  );
};
