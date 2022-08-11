
import Image from 'next/image'
import { FC } from 'react'
import ThumbnailImg from '../public/test_thumbnail.jpg'
import styles from '../styles/Portfolio.module.css'
import Btn from './Btn'

const PortfolioContent: FC = () => {
    return (
        <section className={styles.portfolio} id="portfolio">
            <h2>portfolio</h2>
            <div className={styles.portfolio_body}>
                <ul>
                    <li>
                        <a className={styles.portfolioCard} href="#">
                            <figure>
                                <Image
                                    src={ThumbnailImg}
                                    alt="thumbnail"
                                />
                            </figure>
                            <div>
                                <h3>IT KINGDOM</h3>
                                <p>当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。</p>
                                <time dateTime='2021.10 - 2021.12'>2021.10 - 2021.12</time>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className={styles.portfolioCard} href="#">
                            <figure>
                                <Image
                                    src={ThumbnailImg}
                                    alt="thumbnail"
                                />
                            </figure>
                            <div>
                                <h3>IT KINGDOM</h3>
                                <p>当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。</p>
                                <time dateTime='2021.10 - 2021.12'>2021.10 - 2021.12</time>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className={styles.portfolioCard} href="#">
                            <figure>
                                <Image
                                    src={ThumbnailImg}
                                    alt="thumbnail"
                                />
                            </figure>
                            <div>
                                <h3>IT KINGDOM</h3>
                                <p>当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。</p>
                                <time dateTime='2021.10 - 2021.12'>2021.10 - 2021.12</time>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className={styles.portfolioCard} href="#">
                            <figure>
                                <Image
                                    src={ThumbnailImg}
                                    alt="thumbnail"
                                />
                            </figure>
                            <div>
                                <h3>IT KINGDOM</h3>
                                <p>当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。</p>
                                <time dateTime='2021.10 - 2021.12'>2021.10 - 2021.12</time>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className={styles.portfolioCard} href="#">
                            <figure>
                                <Image
                                    src={ThumbnailImg}
                                    alt="thumbnail"
                                />
                            </figure>
                            <div>
                                <h3>IT KINGDOM</h3>
                                <p>当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。</p>
                                <time dateTime='2021.10 - 2021.12'>2021.10 - 2021.12</time>
                            </div>
                        </a>
                    </li>
                </ul>
                <Btn text="view all" url='#' />
            </div>
        </section>
    )
}

export default PortfolioContent;