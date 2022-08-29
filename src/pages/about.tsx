import React from "react";
import Head from "next/head";
import { NextPage } from "next";

import { AboutContent } from "src/components/AboutContent/AboutContent";

import styles from "src/styles/Home.module.css";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Emi H | About</title>
        <meta name="description" content="About Emi H" />
      </Head>
      <div className={styles.content}>
        <div className={styles.content_inner}>
          <section>
            <h2>about</h2>
            <AboutContent />
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
