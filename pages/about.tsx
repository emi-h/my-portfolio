import React from "react";
import { AboutContent } from "../components/AboutContent/AboutContent";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Head from "next/head";

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
