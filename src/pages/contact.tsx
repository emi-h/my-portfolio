import React from "react";
import { NextPage } from "next";
import styles from "src/styles/Home.module.css";
import Form from "src/components/Form/Form";
import Head from "next/head";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Emi H | Contact</title>
        <meta name="description" content="Emi H contact page" />
      </Head>
      <div className={styles.content}>
        <div className={styles.content_inner}>
          <section>
            <h2>contact</h2>
            <Form />
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
