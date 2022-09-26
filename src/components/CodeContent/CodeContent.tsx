import { Progress } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import BranchImg from "public/i_forkshape.svg";
import StarImg from "public/i_star.svg";
import React from "react";
import { FC } from "react";
import { Btn } from "src/components/Btn/Btn";
import styles from "src/components/CodeContent/CodeContent.module.css";
import { useQuery, gql } from "@apollo/client";

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
  const { loading, error, data } = useQuery<any>(GET_LOCATIONS);
  console.log("data", data);
  console.log("data.viewer", data.viewer);
  console.log("data.viewer.repositories", data.viewer.repositories);

  // // リポジトリの配列
  console.log("data.viewer.repositories.nodes", data.viewer.repositories.nodes);
  const repositoryArray = data.viewer.repositories.nodes;
  console.log("repositoryArray", repositoryArray);

  // // languagesの配列
  const languageArray = repositoryArray.map((repository) => {
    return {
      languageArray: repository.languages.edges,
      size: repository.languages.totalSize,
    };
  });
  console.log("languageArray", languageArray);

  // console.log("languageArray.languageArray"languageArray.languageArray);

  // const languageNameArray = languageArray.map((language) => {
  //   return { languageName: language.languageArray.node.name };
  // });
  // console.log("languageNameArray", languageArray);

  //
  // const langageParamsArray = languageArray.map((language) => {
  //   return { name: language.node };
  // });
  // console.log("langageParamsArray", langageParamsArray);

  // console.log(data.viewer.repositories.nodes);
  // const datas = data.viewer.repositories.nodes;
  // console.log(datas);
  // console.log("language", datas[1].languages.edges[0].node.name);
  // console.log("size", datas[1].languages.edges[0].size);
  // console.log("size2", datas[1].languages);
  // const languages = datas.map((data) => {
  //   return { languages: data.languages.edges };
  // });
  // const languageLength = languages.length;
  // console.log("languages", languages);
  // const languagesSizeArray = languages.map((language) => {
  //   return { languagesArray: language.languages.size };
  // });
  // console.log("languagesSizeArray", languagesSizeArray);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <section className={styles.github} id="github">
      <h2>github</h2>
      <div className={styles.github_body}>
        <ul>
          {repositoryArray.map((repository) => {
            return (
              <li>
                <Link href={repository.url}>
                  <a>
                    <h3>{repository.name}</h3>
                    <p>{repository.description}</p>
                    <div className={styles.icons}>
                      <div className={styles.icon}>
                        <span>
                          <Image src={StarImg} alt="star" />
                        </span>
                        <span>{repository.stargazerCount}</span>
                      </div>
                      <div className={styles.icon}>
                        <span>
                          <Image src={BranchImg} alt="branch" />
                        </span>
                        <span>{repository.forkCount}</span>
                      </div>
                    </div>
                    <div className={styles.langArea}>
                      <Progress
                        sections={[
                          { color: "#3178C6", value: 65.5 },
                          { color: "#F1E05A", value: 33.7 },
                          { color: "#EDEDED", value: 0.8 },
                        ]}
                      />
                      <div className={styles.langText}>
                        <span className={styles.lang}>
                          <span>TypeScript</span>
                          <span className={styles.ratio}>65.5%</span>
                        </span>
                        <span className={styles.lang}>
                          <span>JavaScript</span>
                          <span className={styles.ratio}>33.7%</span>
                        </span>
                        <span className={styles.lang}>
                          <span>Other</span>
                          <span className={styles.ratio}>0.8%</span>
                        </span>
                      </div>
                    </div>
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
