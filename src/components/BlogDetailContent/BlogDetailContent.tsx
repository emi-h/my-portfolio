import React from "react";
import { FC } from "react";
// import { Blog } from "src/type/type";
import styles from "./BlogDetailContent.module.css";

export const BlogDetailContent: FC<any> = (props) => {
  const blog_data = props.props;
  return (
    <section className={styles.blogDetail} id="blog">
      <time dateTime={blog_data.date}>{blog_data.date}</time>
      <h1>{blog_data.title}</h1>
      <div className={styles.blogDetail_body}>
        <div dangerouslySetInnerHTML={{ __html: blog_data.content }}></div>
      </div>
    </section>
  );
};
