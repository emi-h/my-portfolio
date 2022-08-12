import BlogContent from "../components/BlogContent/BlogContent"
import styles from '../styles/Home.module.css'
import { NextPage } from "next"

const Blog: NextPage = () => {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.content_inner}>
                    <section className={styles.blog} id="blog">
                        <h2>blog</h2>
                        <div className={styles.blog_body}>
                            <BlogContent />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Blog