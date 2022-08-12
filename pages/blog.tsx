import BlogContent from "../components/BlogContent"
import styles from '../styles/Home.module.css'
import { NextPage } from "next"

const Blog: NextPage = () => {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.content_inner}>
                    <section>
                        <BlogContent />
                    </section>
                </div>
            </div>
        </>
    )
}

export default Blog