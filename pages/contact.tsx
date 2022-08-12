import { NextPage } from "next"
import Footer from "../components/Footer"
import Header from "../components/Header"
import styles from '../styles/Home.module.css'

const Contact: NextPage = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <Header />
                <main className={styles.main}>
                    <div className={styles.content}>
                        <div className={styles.content_inner}>
                            <p>準備中</p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Contact