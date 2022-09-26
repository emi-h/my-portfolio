import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export const githubClient = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    // authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
    authorization: "Bearer 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",
  },
  cache: new InMemoryCache(),
});

// githubClient
//   .query({
//     query: gql`
//       query GetRepositoryLanguages {
//         viewer {
//           repositories(
//             first: 10
//             orderBy: { field: PUSHED_AT, direction: DESC }
//           ) {
//             nodes {
//               id
//               name
//               description
//               url
//               forkCount
//               stargazerCount
//               languages(first: 10) {
//                 pageInfo {
//                   hasNextPage
//                   hasPreviousPage
//                 }
//                 totalSize
//                 totalCount
//                 edges {
//                   cursor
//                   node {
//                     id
//                     name
//                     color
//                   }
//                   size
//                 }
//               }
//             }
//           }
//         }
//       }
//     `,
//   })
//   .then((result) =>
//     console.log("result", result.data.viewer.repositories.nodes)
//   );
