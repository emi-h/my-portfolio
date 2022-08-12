import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Mv from '../components/Mv'
import BlogContent from '../components/BlogContent'
import PortfolioContent from '../components/PortfolioContent'
import Twitter from '../components/Twitter'
import CodeContent from '../components/CodeContent'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Emi H</title>
        <meta name="description" content="Emi H portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Mv />
      <div className={styles.content}>
        <div className={styles.content_inner}>
          <BlogContent />
          <PortfolioContent />
          <div className={styles.wrapper_gitTw}>
            <CodeContent />
            <Twitter />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
