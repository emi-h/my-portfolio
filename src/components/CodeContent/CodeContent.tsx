import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import BranchImg from "public/i_forkshape.svg";
import StarImg from "public/i_star.svg";
import React from "react";
import { FC } from "react";
import { Btn } from "src/components/Btn/Btn";
import styles from "src/components/CodeContent/CodeContent.module.css";
import { GetRepositoryLanguagesQuery } from "src/gql/graphql";

import { CodeContentLanguage } from "./CodeContentLanguage";

const GET_LOCATIONS = gql`
  query GetRepositoryLanguages {
    viewer {
      repositories(first: 5, orderBy: { field: PUSHED_AT, direction: DESC }) {
        nodes {
          id
          name
          description
          url
          forkCount
          stargazerCount
          languages(first: 3) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            totalSize
            totalCount
            edges {
              cursor
              node {
                id
                name
                color
              }
              size
            }
          }
        }
      }
    }
  }
`;

export const CodeContent: FC = () => {
  const { data, error, loading } =
    useQuery<GetRepositoryLanguagesQuery>(GET_LOCATIONS);

  // // リポジトリの配列
  const repositoryArray = data?.viewer.repositories.nodes;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
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
                    <p>{repository?.description}</p>
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
};
