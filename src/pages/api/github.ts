import { Octokit } from "@octokit/core";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  });

  const QUERY = `
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

  const repository = await octokit.graphql(QUERY);
  if (!repository) {
    return;
  }
  res.status(200).json({ repository });
};

export default handler;
