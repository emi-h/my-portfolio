import React from "react";
import Link from "next/link";
import { FC } from "react";
import styles from "src/components/BlogContent/BlogContent.module.css";
import { Blog } from "src/type/type";
// import { Blog } from "src/type/type";
// import { MicroCMSListResponse } from "microcms-js-sdk";

// type Props = {
//   contens: Blog[];
//   limit: number;
// };
export const BlogContent: FC<{ blogArray: Blog[] }> = ({ blogArray }) => {
  console.log("blogArray", blogArray);
  // const blog_data = props.props.contents;
  return (
    <ul className={styles.list}>
      {blogArray?.map((content) => {
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
