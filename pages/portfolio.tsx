import { NextPage } from "next"
import Footer from "../components/Footer"
import Header from "../components/Header"
import PortfolioContent from "../components/PortfolioContent"
import styles from '../styles/Home.module.css'

const Portfolio: NextPage = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <Header />
                <main className={styles.main}>
                    <div className={styles.content}>
                        <div className={styles.content_inner}>
                            <PortfolioContent />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Portfolio