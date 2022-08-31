import { Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FC } from "react";
import styles from "src/components/PortfolioContent/PortfolioContent.module.css";
import { Portfolio } from "src/type/type";

export const PortfolioContent: FC<{ portfolioArray: Portfolio[] }> = ({
  portfolioArray,
}) => {
  return (
    <ul className={styles.list}>
      {portfolioArray.map((data) => {
        const thum = data.imgUrl.url;
        return (
          <li key={data.id}>
            <Link href={`/portfolio/${data.id}`}>
              <a className={styles.portfolioCard}>
                <figure>
                  <Image
                    src={thum}
                    alt="thumbnail"
                    layout="fill"
                    objectFit="cover"
                  />
                </figure>
                <div>
                  <h3>{data.title}</h3>
                  <Text lineClamp={4}>
                    <div dangerouslySetInnerHTML={{ __html: data.text }}></div>
                  </Text>
                  <time
                    dateTime={new Date(data.date).toLocaleDateString("ko-KR")}
                  >
                    {new Date(data.date).toLocaleDateString("ko-KR")}
                  </time>
                </div>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
