import React from "react";
import { FC } from "react";
import { Btn } from "../Btn/Btn";
import { Avatar } from "@mantine/core";
import styles from "./Twitter.module.css";
import Link from "next/link";

export const Twitter: FC = () => {
  return (
    <section className={styles.twitter} id="twitter">
      <h2>twitter</h2>
      <div className={styles.twitter_body}>
        <div className={styles.twitter_box}>
          <ul className={styles.twitter_list}>
            <li>
              <Link href="#">
                <a>
                  <div className={styles.tweet_inner}>
                    <div className={styles.tweet_icon}>
                      <Avatar
                        radius="xl"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                      />
                    </div>
                    <div className={styles.tweet_body}>
                      <div className={styles.tweet_head}>
                        <span className={styles.tweet_name01}>
                          しまぶーのIT大学
                        </span>
                        <span className={styles.tweet_name02}>
                          @shimabu_it・5月25日
                        </span>
                      </div>
                      <p>
                        📣 新サービス「Noway Form」をリリースしました！ Noway
                        Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle
                        FormsでやっていたことがNotionだけで完結します✌✨
                        試しに使っていただけると幸いです😊
                        https://www.noway-form.com/ja
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <div className={styles.tweet_inner}>
                    <div className={styles.tweet_icon}>
                      <Avatar
                        radius="xl"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                      />
                    </div>
                    <div className={styles.tweet_body}>
                      <div className={styles.tweet_head}>
                        <span className={styles.tweet_name01}>
                          しまぶーのIT大学
                        </span>
                        <span className={styles.tweet_name02}>
                          @shimabu_it・5月25日
                        </span>
                      </div>
                      <p>
                        📣 新サービス「Noway Form」をリリースしました！ Noway
                        Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle
                        FormsでやっていたことがNotionだけで完結します✌✨
                        試しに使っていただけると幸いです😊
                        https://www.noway-form.com/ja
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <div className={styles.tweet_inner}>
                    <div className={styles.tweet_icon}>
                      <Avatar
                        radius="xl"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                      />
                    </div>
                    <div className={styles.tweet_body}>
                      <div className={styles.tweet_head}>
                        <span className={styles.tweet_name01}>
                          しまぶーのIT大学
                        </span>
                        <span className={styles.tweet_name02}>
                          @shimabu_it・5月25日
                        </span>
                      </div>
                      <p>
                        📣 新サービス「Noway Form」をリリースしました！ Noway
                        Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle
                        FormsでやっていたことがNotionだけで完結します✌✨
                        試しに使っていただけると幸いです😊
                        https://www.noway-form.com/ja
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Btn text="View on Twitter" url="https://twitter.com/emi11882681" />
    </section>
  );
};
