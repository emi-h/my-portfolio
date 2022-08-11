import { NextPage } from "next"
// import Footer from "../components/Footer"
import Header from "../components/Header"
import Mv from "../components/Mv"
import styles from '../styles/Home.module.css'

const Contact: NextPage = () => {
    return (
        <>
            <Header />
            <Mv />
            <div className={styles.content}>
                <div className={styles.content_inner}>
                    <p>準備中</p>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Contact