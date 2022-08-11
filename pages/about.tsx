import Header from "../components/Header"
import Mv from "../components/Mv"
import AboutContent from '../components/AboutContent'
import styles from '../styles/Home.module.css'
import { NextPage } from "next"
import Footer from "../components/Footer"

const About: NextPage = () => {
    return (
        <>
            <Header />
            <Mv />
            <div className={styles.content}>
                <div className={styles.content_inner}>
                    <section>
                        <h2>about</h2>
                        <AboutContent />
                    </section>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About