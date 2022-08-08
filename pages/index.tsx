import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ThumbnailImg from '../public/test_thumbnail.jpg'
import { Footer } from '../components/footer'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Emi H</title>
        <meta name="description" content="Emi H portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.header_inner}>
          <h1 className={styles.logo}>Emi Portfolio</h1>
          <nav className={styles.nav}>
            <ul>
              <li><a href="#about">about</a></li>
              <li><a href="#blog">blog</a></li>
              <li><a href="#portfolio">portfolio</a></li>
              <li><a href="#contact">contact</a></li>
            </ul>
            <div>🌙</div>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mv}>
          <div className={styles.mv_inner}>
            <h2>Emi Portfolio</h2>
            <p>Emiのポートフォリオのためのページです</p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.content_inner}>
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
                <div className={styles.btn_wrapper}>
                  <a className={styles.btn} href="#">view all</a>
                </div>
              </div>
            </section>
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
                </ul>
                <div className={styles.btn_wrapper}>
                  <a className={styles.btn} href="#">view all</a>
                </div>
              </div>
            </section>
            <div className={styles.wrapper_gitTw}>
              <section className={styles.github} id="github">
                <h2>github</h2>
                <div className={styles.github_body}>
                  <ul>
                    <li>
                      <a href="#">
                        <h3>lightsound/nexst-tailwind</h3>
                        <p>Next.js starter template.</p>
                        <div>
                          <span>★</span><span>117</span><span>★</span><span>18</span>
                        </div>
                        <div>bar</div>
                        <div>lang</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h3>lightsound/nexst-tailwind</h3>
                        <p>Next.js starter template.</p>
                        <div>
                          <span>★</span><span>117</span><span>★</span><span>18</span>
                        </div>
                        <div>bar</div>
                        <div>lang</div>
                      </a>
                    </li>
                  </ul>
                  <div className={styles.btn_wrapper}>
                    <a className={styles.btn} href="#">View on GitHub</a>
                  </div>
                </div>
              </section>
              <section className={styles.twitter} id="twitter">
                <h2>twitter</h2>
                <div className={styles.twitter_body}>
                  <ul>
                    <li>
                      <a href="#">
                        tweet
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        tweet
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={styles.btn_wrapper}>
                  <a className={styles.btn} href="#">View on Twitter </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
