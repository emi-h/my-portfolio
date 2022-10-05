import { Avatar } from "@mantine/core";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import { FC } from "react";
import useSWR from "swr";
import {
  findUserByUsername,
  TwitterResponse,
  usersIdTweets,
} from "twitter-api-sdk/dist/types";

import { Btn } from "../Btn/Btn";
import styles from "./Twitter.module.css";

export const Twitter: FC = () => {
  const { data } = useSWR<{
    tweets: TwitterResponse<usersIdTweets>["data"];
    user: TwitterResponse<findUserByUsername>["data"];
  }>(`/api/tweet`, async (url) => (await fetch(url)).json());
  // console.log("data", data);
  return (
    <section className={styles.twitter} id="twitter">
      <h2>twitter</h2>
      <div className={styles.twitter_body}>
        <div className={styles.twitter_box}>
          <ul className={styles.twitter_list}>
            {data?.tweets?.map((tweet) => {
              return (
                <li key={tweet.id}>
                  <Link
                    href={`https://twitter.com/uolYUd2kPpw3yRY/status/${tweet.id}`}
                  >
                    <a>
                      <div className={styles.tweet_inner}>
                        <div className={styles.tweet_icon}>
                          <Avatar
                            radius="xl"
                            src={data.user?.profile_image_url}
                            alt={data.user?.name}
                          />
                        </div>
                        <div className={styles.tweet_body}>
                          <div className={styles.tweet_head}>
                            <span className={styles.tweet_name01}>
                              {data?.user?.name}
                            </span>
                            <span className={styles.tweet_name02}>
                              {`@${data?.user?.username}・${dayjs(
                                tweet.created_at
                              ).format("M月D日")}`}
                            </span>
                          </div>
                          <p>{tweet.text}</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Btn text="View on Twitter" url="https://twitter.com/emi11882681" />
    </section>
  );
};
