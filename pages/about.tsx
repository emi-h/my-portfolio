import React from "react";
import AboutContent from "../components/AboutContent/AboutContent";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";

const About: NextPage = () => {
    return (
        <>
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