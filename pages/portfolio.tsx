import { NextPage } from "next"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Mv from "../components/Mv"
import PortfolioContent from "../components/PortfolioContent"
import styles from '../styles/Home.module.css'

const Portfolio: NextPage = () => {
    return (
        <>
            <Header />
            <Mv />
            <div className={styles.content}>
                <div className={styles.content_inner}>
                    <PortfolioContent />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Portfolio