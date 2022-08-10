import styles from '../styles/Twitter.module.css'
import { Btn } from './Btn'

export const Twitter = () => {
    return (
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
            <Btn text='View on Twitter' url='https://twitter.com/emi11882681' />
        </section>
    )
}