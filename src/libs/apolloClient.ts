import { ApolloClient, InMemoryCache } from "@apollo/client";

export const githubClient = new ApolloClient({
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
  uri: "https://api.github.com/graphql",
});
