import { NextPage } from "next"
import Footer from "../components/Footer"
import Header from "../components/Header"
import styles from '../styles/Home.module.css'
import Form from "../components/Form";

const Contact: NextPage = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <Header />
                <main className={styles.main}>
                    <div className={styles.content}>
                        <div className={styles.content_inner}>
                            <section>
                                <h2>contact</h2>
                                <Form />
                            </section>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Contact