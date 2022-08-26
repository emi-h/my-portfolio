import React from "react";
import Image from "next/image";
import { FC } from "react";
import styles from "src/components/PortfolioContent/PortfolioContent.module.css";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PortfolioContent: FC<any> = ({ props }) => {
  const portfolio_data = props.portfolio_data;
  // console.log(portfolio_data.contents[0]);
  return (
    <ul className={styles.list}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
      {portfolio_data.contents?.map((data: any) => {
        // console.log(data.imgUrl.url);
        const thum = data.imgUrl.url;
        // console.log(thum);
        return (
          <li key={data.id}>
            <Link href="/portfolio/id">
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
                  <div dangerouslySetInnerHTML={{ __html: data.text }}></div>
                  <time dateTime="{data.date}">{data.date}</time>
                </div>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
