import { Header } from "../components/Header"
import { Mv } from "../components/Mv"
import { PortfolioContent } from "../components/PortfolioContent"
import styles from '../styles/Home.module.css'

function Portfolio() {
    return (
        <>
            <Header />
            <Mv />
            <div className={styles.content}>
                <div className={styles.content_inner}>
                    <PortfolioContent />
                </div>
            </div>
        </>
    )
}

export default Portfolio