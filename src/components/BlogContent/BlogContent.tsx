import React from "react";
import Link from "next/link";
import { FC } from "react";
import styles from "src/components/BlogContent/BlogContent.module.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BlogContent: FC<any> = ({ props }) => {
  console.log(props);
  return (
    <ul className={styles.list}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
      {props.contents?.map((content: any) => {
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
