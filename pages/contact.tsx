import { Header } from "../components/Header"
import { Mv } from "../components/Mv"
import styles from '../styles/Home.module.css'

function Contact() {
    return (
        <>
            <Header />
            <Mv />
            <div className={styles.content}>
                <div className={styles.content_inner}>
                    <p>準備中</p>
                </div>
            </div>
        </>
    )
}

export default Contact