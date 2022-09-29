/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query GetRepositoryLanguages {\n    viewer {\n      repositories(first: 5, orderBy: { field: PUSHED_AT, direction: DESC }) {\n        nodes {\n          id\n          name\n          description\n          url\n          forkCount\n          stargazerCount\n          languages(first: 3) {\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n            totalSize\n            totalCount\n            edges {\n              cursor\n              node {\n                id\n                name\n                color\n              }\n              size\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetRepositoryLanguagesDocument,
};

export function graphql(source: "\n  query GetRepositoryLanguages {\n    viewer {\n      repositories(first: 5, orderBy: { field: PUSHED_AT, direction: DESC }) {\n        nodes {\n          id\n          name\n          description\n          url\n          forkCount\n          stargazerCount\n          languages(first: 3) {\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n            totalSize\n            totalCount\n            edges {\n              cursor\n              node {\n                id\n                name\n                color\n              }\n              size\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetRepositoryLanguages {\n    viewer {\n      repositories(first: 5, orderBy: { field: PUSHED_AT, direction: DESC }) {\n        nodes {\n          id\n          name\n          description\n          url\n          forkCount\n          stargazerCount\n          languages(first: 3) {\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n            totalSize\n            totalCount\n            edges {\n              cursor\n              node {\n                id\n                name\n                color\n              }\n              size\n            }\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;