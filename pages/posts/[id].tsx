import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Mv } from "../../components/Mv"
import styles from '../../styles/Home.module.css'

function Post() {
    return (
        <>
            <Header />
            <Mv />
            <div className={styles.content}>
                <div className={styles.content_inner}>
                    <p>投稿詳細</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Post