import { Progress } from "@mantine/core";
import React from "react";
import { FC } from "react";
import styles from "src/components/CodeContent/CodeContent.module.css";
import { LanguageConnection } from "src/gql/graphql";

export const CodeContentLanguage: FC<{ languageArray: LanguageConnection }> = ({
  languageArray,
}) => {
  const totalSize = languageArray.totalSize;

  return (
    <div className={styles.langArea}>
      <Progress
        sections={languageArray?.edges?.map((language) => {
          return {
            color: language?.node.color ? language?.node.color : "",
            value: language?.size ? (language?.size / totalSize) * 100 : 0,
          };
        })}
      />
      <div className={styles.langText}>
        {languageArray?.edges?.map((language) => {
          return (
            <span key={language?.node.name} className={styles.lang}>
              <span
                className={styles.langcolor}
                style={{
                  backgroundColor: language?.node.color
                    ? language?.node.color
                    : "",
                }}
              ></span>
              <span>{language?.node.name}</span>
              <span className={styles.ratio}>
                {language?.size
                  ? Math.floor((language.size / totalSize) * 1000) / 10
                  : 0}
                %
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
};
