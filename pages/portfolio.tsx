import { NextPage } from "next"
import PortfolioContent from "../components/PortfolioContent/PortfolioContent"
import styles from '../styles/Home.module.css'

const Portfolio: NextPage = () => {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.content_inner}>
                    <section className={styles.portfolio} id="portfolio">
                        <h2>portfolio</h2>
                        <div className={styles.portfolio_body}>
                            <PortfolioContent />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Portfolio