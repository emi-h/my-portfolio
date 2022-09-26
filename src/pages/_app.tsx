import "src/styles/globals.css";

import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { useState } from "react";
import { Layout } from "src/components/Layout/Layout";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { githubClient } from "src/libs/apolloClient";

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ApolloProvider client={githubClient}>
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            theme={{ colorScheme }}
            withGlobalStyles
            withNormalizeCSS
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MantineProvider>
        </ColorSchemeProvider>
      </>
    </ApolloProvider>
  );
}

export default MyApp;
