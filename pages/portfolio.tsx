import { NextPage } from "next"
import PortfolioContent from "../components/PortfolioContent"
import styles from '../styles/Home.module.css'

const Portfolio: NextPage = () => {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.content_inner}>
                    <PortfolioContent />
                </div>
            </div>
        </>
    )
}

export default Portfolio