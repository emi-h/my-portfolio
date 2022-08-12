import { FC } from 'react'
import styles from './AboutContent.module.css'

const AboutContent: FC = () => {
    return (
        <>
            <div className={styles.aboutContent}>
                <h3>Emi H</h3>
                <p>ITエンジニア。大阪にてWeb制作フリーランスとして活動中。React/TypeScriptを使用したアプリを開発中。</p>
            </div>
        </>
    )
}
export default AboutContent;