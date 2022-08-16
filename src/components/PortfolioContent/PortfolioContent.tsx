import React from "react";
import Image from "next/image";
import { FC } from "react";
import ThumbnailImg from "public/test_thumbnail.jpg";
import ThumbnailImg2 from "public/test_thumbnail2.jpg";
import styles from "src/components/PortfolioContent/PortfolioContent.module.css";
import Link from "next/link";

export const PortfolioContent: FC = () => {
  return (
    <ul className={styles.list}>
      <li>
        <Link href="/portfolio/id">
          <a className={styles.portfolioCard}>
            <figure>
              <Image
                src={ThumbnailImg}
                alt="thumbnail"
                layout="fill"
                objectFit="cover"
              />
            </figure>
            <div>
              <h3>IT KINGDOM</h3>
              <p>
                当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
              </p>
              <time dateTime="2021.10 - 2021.12">2021.10 - 2021.12</time>
            </div>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/portfolio/id">
          <a className={styles.portfolioCard}>
            <figure>
              <Image
                src={ThumbnailImg2}
                alt="thumbnail"
                layout="fill"
                objectFit="cover"
              />
            </figure>
            <div>
              <h3>IT KINGDOM</h3>
              <p>
                当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
              </p>
              <time dateTime="2021.10 - 2021.12">2021.10 - 2021.12</time>
            </div>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/portfolio/id">
          <a className={styles.portfolioCard}>
            <figure>
              <Image
                src={ThumbnailImg}
                alt="thumbnail"
                layout="fill"
                objectFit="cover"
              />
            </figure>
            <div>
              <h3>IT KINGDOM</h3>
              <p>
                当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
              </p>
              <time dateTime="2021.10 - 2021.12">2021.10 - 2021.12</time>
            </div>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/portfolio/id">
          <a className={styles.portfolioCard}>
            <figure>
              <Image
                src={ThumbnailImg}
                alt="thumbnail"
                layout="fill"
                objectFit="cover"
              />
            </figure>
            <div>
              <h3>IT KINGDOM</h3>
              <p>
                当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
              </p>
              <time dateTime="2021.10 - 2021.12">2021.10 - 2021.12</time>
            </div>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/portfolio/id">
          <a className={styles.portfolioCard}>
            <figure>
              <Image
                src={ThumbnailImg}
                alt="thumbnail"
                layout="fill"
                objectFit="cover"
              />
            </figure>
            <div>
              <h3>IT KINGDOM</h3>
              <p>
                当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
              </p>
              <time dateTime="2021.10 - 2021.12">2021.10 - 2021.12</time>
            </div>
          </a>
        </Link>
      </li>
    </ul>
  );
};
