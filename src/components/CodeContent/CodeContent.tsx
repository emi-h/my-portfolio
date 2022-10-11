import Image from "next/image";
import Link from "next/link";
import BranchImg from "public/i_forkshape.svg";
import StarImg from "public/i_star.svg";
import React from "react";
import { FC } from "react";
import { Btn } from "src/components/Btn/Btn";
import styles from "src/components/CodeContent/CodeContent.module.css";
import { GetRepositoryLanguagesQuery } from "src/gql/graphql";
import useSWR from "swr";

import { CodeContentLanguage } from "./CodeContentLanguage";

type Props = {
  repository: GetRepositoryLanguagesQuery;
};
export const CodeContent: FC = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR<Props>(`/api/github`, fetcher);

  // // リポジトリの配列
  const repositoryArray = data?.repository.viewer.repositories.nodes;

  if (error)
    return (
      <section className={styles.github} id="github">
        <h2>github</h2>
        <div className={styles.github_body}>
          <div>failed to load</div>
          <Btn text="View on GitHub" url="https://github.com/emi-h" />
        </div>
      </section>
    );
  if (!data)
    return (
      <section className={styles.github} id="github">
        <h2>github</h2>
        <div className={styles.github_body}>
          <div>loading...</div>
          <Btn text="View on GitHub" url="https://github.com/emi-h" />
        </div>
      </section>
    );
  return (
    <section className={styles.github} id="github">
      <h2>github</h2>
      <div className={styles.github_body}>
        <ul>
          {repositoryArray?.map((repository) => {
            return (
              <li key={repository?.id}>
                <Link href={repository?.url}>
                  <a>
                    <h3>{repository?.name}</h3>
                    <p>
                      {repository?.description
                        ? repository?.description
                        : "No description"}
                    </p>
                    <div className={styles.icons}>
                      <div className={styles.icon}>
                        <span>
                          <Image src={StarImg} alt="star" />
                        </span>
                        <span>{repository?.stargazerCount}</span>
                      </div>
                      <div className={styles.icon}>
                        <span>
                          <Image src={BranchImg} alt="branch" />
                        </span>
                        <span>{repository?.forkCount}</span>
                      </div>
                    </div>
                    {repository?.languages ? (
                      <CodeContentLanguage
                        languageArray={repository?.languages}
                      />
                    ) : null}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        <Btn text="View on GitHub" url="https://github.com/emi-h" />
      </div>
    </section>
  );
  return null;
};
