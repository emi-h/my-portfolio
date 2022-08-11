import Link from 'next/link'
import { FC } from 'react'
import styles from '../styles/Blog.module.css'
import { Btn } from './Btn'

export const BlogContent: FC = () => {
    return (
        <section className={styles.blog} id="blog">
            <h2>blog</h2>
            <div className={styles.blog_body}>
                <ul>
                    <li>
                        <Link href="/posts/">
                            <a>
                                <h3>This is a header</h3>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                                <time dateTime='2022.07.11'>2022.07.11</time>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts/">
                            <a>
                                <h3>This is a header</h3>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                                <time dateTime='2022.07.11'>2022.07.11</time>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts/">
                            <a>
                                <h3>This is a header</h3>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                                <time dateTime='2022.07.11'>2022.07.11</time>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts/">
                            <a>
                                <h3>This is a header</h3>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                                <time dateTime='2022.07.11'>2022.07.11</time>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts/">
                            <a>
                                <h3>This is a header</h3>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                                <time dateTime='2022.07.11'>2022.07.11</time>
                            </a>
                        </Link>
                    </li>
                </ul>
                <Btn text="view all" url='#' />
            </div>
        </section>
    )
}