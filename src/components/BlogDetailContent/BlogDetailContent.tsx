import React from "react";
import { FC } from "react";
// import { Blog } from "src/type/type";
import styles from "./BlogDetailContent.module.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BlogDetailContent: FC<any> = (props) => {
  return (
    <section className={styles.blogDetail} id="blog">
      <time dateTime={props.props.date}>{props.props.date}</time>
      <h1>{props.props.title}</h1>
      <div className={styles.blogDetail_body}>
        <div dangerouslySetInnerHTML={{ __html: props.props.content }}></div>
      </div>
    </section>
  );
};
