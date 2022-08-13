import React from "react";
import Link from "next/link";
import { FC } from "react";
import styles from "src/components/BlogContent/BlogContent.module.css";

export const BlogContent: FC = () => {
  return (
    <ul className={styles.list}>
      <li>
        <Link href="/blog/id">
          <a>
            <h3>This is a header</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.{" "}
            </p>
            <time dateTime="2022.07.11">2022.07.11</time>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/blog/id">
          <a>
            <h3>This is a header</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.{" "}
            </p>
            <time dateTime="2022.07.11">2022.07.11</time>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/blog/id">
          <a>
            <h3>This is a header</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.{" "}
            </p>
            <time dateTime="2022.07.11">2022.07.11</time>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/blog/id">
          <a>
            <h3>This is a header</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.{" "}
            </p>
            <time dateTime="2022.07.11">2022.07.11</time>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/blog/id">
          <a>
            <h3>This is a header</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.{" "}
            </p>
            <time dateTime="2022.07.11">2022.07.11</time>
          </a>
        </Link>
      </li>
    </ul>
  );
};
