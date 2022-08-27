import React from "react";
import Image from "next/image";
import { FC } from "react";
import styles from "src/components/PortfolioContent/PortfolioContent.module.css";
import Link from "next/link";

export const PortfolioContent: FC<any> = (props) => {
  const portfolio_data = props.props.contents;
  return (
    <ul className={styles.list}>
      {portfolio_data.map((data: any) => {
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
