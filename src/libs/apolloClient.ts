import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export const githubClient = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
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
