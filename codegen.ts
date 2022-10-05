/* eslint-disable sort-keys-custom-order/object-keys */
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://api.github.com/graphql": {
        headers: {
          Authorization: "Bearer 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",
        },
      },
    },
  ],
  documents: "src/**/**/*.tsx",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
