import Header from "../components/Header"
import AboutContent from '../components/AboutContent'
import styles from '../styles/Home.module.css'
import { NextPage } from "next"
import Footer from "../components/Footer"

const About: NextPage = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <Header />
                <main className={styles.main}>
                    <div className={styles.content}>
                        <div className={styles.content_inner}>
                            <section>
                                <h2>about</h2>
                                <AboutContent />
                            </section>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default About