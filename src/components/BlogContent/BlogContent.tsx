import React from "react";
import Link from "next/link";
import { Text } from "@mantine/core";
import { FC } from "react";
import styles from "src/components/BlogContent/BlogContent.module.css";
import { Blog } from "src/type/type";

export const BlogContent: FC<{ blogArray: Blog[] }> = ({ blogArray }) => {
  return (
    <ul className={styles.list}>
      {blogArray?.map((content) => {
        return (
          <li key={content.id}>
            <Link href={`/blog/${content.id}`}>
              <a>
                <h3>{content.title}</h3>
                <Text lineClamp={1}>{content.subtitle}</Text>
                <time
                  dateTime={new Date(content.date).toLocaleDateString("ko-KR")}
                >
                  {new Date(content.date).toLocaleDateString("ko-KR")}
                </time>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
