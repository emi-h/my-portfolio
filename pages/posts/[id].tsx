import { NextPage } from "next"
import BlogDetailContent from "../../components/BlogDetailContent/BlogDetailContent"
import styles from '../../styles/Home.module.css'

const Post: NextPage = () => {
    return (
        <>
            <section>
                <div className={styles.content}>
                    <div className={styles.content_inner}>
                        <BlogDetailContent />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Post