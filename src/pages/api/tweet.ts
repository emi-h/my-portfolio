import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "twitter-api-sdk";
import type {
  findUserByUsername,
  TwitterResponse,
  usersIdTweets,
} from "twitter-api-sdk/dist/types";
// [改善が必要な点]
// ・テキスト情報だけでなく、リンクや画像も取得したい。
// ・expansionしてuser.fieldsを一緒に取得したい。
// ・ツイート詳細のリンクを取得・設置したい。
// ・API取得エラー時どうするか。
const handler = async (
  _req: NextApiRequest,
  res: NextApiResponse<{
    tweets: TwitterResponse<usersIdTweets>["data"];
    user: TwitterResponse<findUserByUsername>["data"];
  }>
) => {
  const client = new Client(process.env.BEARER_TOKEN);
  const { data: user } = await client.users.findUserByUsername("shimabu_it", {
    "user.fields": ["created_at", "name", "profile_image_url", "username"],
  });

  if (!user) {
    return;
  }
  const { data: tweets } = await client.tweets.usersIdTweets(user.id, {
    max_results: 10,
    "tweet.fields": ["author_id", "created_at", "geo"],
    //     expansions: ["author_id"], //expansionしてuser.fieldsを一緒に取得するのが理想
    //     "user.fields": ["profile_image_url", "username", "name"],
  });

  if (!tweets) {
    return;
  }
  res.status(200).json({ tweets, user });
};

export default handler;
