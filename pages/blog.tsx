import BlogContent from "../components/BlogContent"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from '../styles/Home.module.css'
import { NextPage } from "next"

const Blog: NextPage = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <Header />
                <main className={styles.main}>
                    <div className={styles.content}>
                        <div className={styles.content_inner}>
                            <BlogContent />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Blog