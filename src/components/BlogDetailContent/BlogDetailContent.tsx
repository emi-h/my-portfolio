import React from "react";
import { FC } from "react";
import { Blog } from "src/type/type";

import styles from "./BlogDetailContent.module.css";

export const BlogDetailContent: FC<{ blogData: Blog }> = ({ blogData }) => {
  return (
    <section className={styles.blogDetail} id="blog">
      <time dateTime={new Date(blogData.date).toLocaleDateString("ko-KR")}>
        {new Date(blogData.date).toLocaleDateString("ko-KR")}
      </time>
      <h1>{blogData.title}</h1>
      <div className={styles.blogDetail_body}>
        <div dangerouslySetInnerHTML={{ __html: blogData.content }}></div>
      </div>
    </section>
  );
};
