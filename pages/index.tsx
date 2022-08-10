import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Mv } from '../components/Mv'
import { Blog } from '../components/Blog'
import { Portfolio } from '../components/Portfolio'
import { GitHub } from '../components/Github'
import { Twitter } from '../components/Twitter'

const Home: NextPage = () => {

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Emi H</title>
        <meta name="description" content="Emi H portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <Mv />
        <div className={styles.content}>
          <div className={styles.content_inner}>
            <Blog />
            <Portfolio />
            <div className={styles.wrapper_gitTw}>
              <GitHub />
              <Twitter />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
