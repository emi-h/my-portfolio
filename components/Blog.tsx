import styles from '../styles/Blog.module.css'
import { Btn } from './Btn'

export const Blog = () => {
    return (
        <section className={styles.blog} id="blog">
            <h2>blog</h2>
            <div className={styles.blog_body}>
                <ul>
                    <li>
                        <a href="#">
                            <h3>This is a header</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                            <time dateTime='2022.07.11'>2022.07.11</time>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <h3>This is a header</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                            <time dateTime='2022.07.11'>2022.07.11</time>
                        </a>
                    </li>
                </ul>
                <Btn text="view all" url='#' />
            </div>
        </section>
    )
}