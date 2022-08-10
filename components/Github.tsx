import styles from '../styles/GitHub.module.css'
import { Btn } from './Btn'

export const GitHub = () => {
    return (
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
                <Btn text="View on GitHub" url='https://github.com/emi-h' />
            </div>
        </section>
    )
}