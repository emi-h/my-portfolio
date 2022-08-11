import { TwitterTimelineEmbed } from 'react-twitter-embed'
import styles from '../styles/Twitter.module.css'
import { Btn } from './Btn'

export const Twitter = () => {
    return (
        <section className={styles.twitter} id="twitter">
            <h2>twitter</h2>
            <div className={styles.twitter_body}>
                <div className={styles.twitter_box}>
                    <TwitterTimelineEmbed
                        onLoad={function noRefCheck() { }}
                        options={{
                            height: 810
                        }}
                        sourceType="profile"
                        userId={'1254763822050467840'}
                    />
                </div>
            </div>
            <Btn text='View on Twitter' url='https://twitter.com/emi11882681' />
        </section>
    )
}