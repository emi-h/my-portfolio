import React from "react";
import Link from "next/link";
import { FC } from "react";
import styles from "src/components/BlogContent/BlogContent.module.css";
// import { Blog } from "src/type/type";
// import { MicroCMSListResponse } from "microcms-js-sdk";

// type Props = {
//   contens: Blog[];
//   limit: number;
// };
export const BlogContent: FC<any> = (props) => {
  const blog_data = props.props.contents;
  return (
    <ul className={styles.list}>
      {blog_data.map((content: any) => {
        return (
          <li key={content.id}>
            <Link href={`/blog/${content.id}`}>
              <a>
                <h3>{content.title}</h3>
                <p>{content.subtitle}</p>
                <time dateTime={content.date}>{content.date}</time>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
