import React from "react";
import { ReactElement } from "react";
import { Header } from "src/components/Header/Header";
import { Footer } from "src/components/Footer/Footer";
import styles from "src/components/Layout/Layout.module.css";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
};
