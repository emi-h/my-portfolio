import { BlogContent } from "../components/BlogContent"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Mv } from "../components/Mv"
import styles from '../styles/Home.module.css'

function Blog() {
    return (
        <>
            <Header />
            <Mv />
            <div className={styles.content}>
                <div className={styles.content_inner}>
                    <BlogContent />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog