import { ReactElement } from 'react'
import Header from "./Header"
import Footer from "./Footer"
import styles from '../styles/Layout.module.css'

type LayoutProps = Required<{
      readonly children: ReactElement
}>

export const Layout = ({ children }: LayoutProps) => {
      return (
            <>
                  <div className={styles.wrapper}>
                        <Header />
                        <main className={styles.main}>{children}</main>
                        <Footer />
                  </div>
            </>
      )
};