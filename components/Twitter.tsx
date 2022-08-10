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
                    {/* <a class="twitter-timeline" data-height="500" data-theme="dark" href="https://twitter.com/emi11882681?ref_src=twsrc%5Etfw">Tweets by emi11882681</a>
                    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
                </div>
            </div>
            <Btn text='View on Twitter' url='https://twitter.com/emi11882681' />
        </section>
    )
}