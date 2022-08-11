import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Mv.module.css'
import iconTW from '../public/i_twitter.svg'
import iconFB from '../public/i_fb.svg'
import iconLines from '../public/i_lines.svg'

export const Mv = () => {
    return (
        <div className={styles.mv}>
            <div className={styles.mv_inner}>
                <div>
                    <h2>Emi Portfolio</h2>
                    <p>Emiのポートフォリオのためのページです</p>
                </div>
                <div>
                    <ul className={styles.iconList}>
                        <li>
                            <Link href="https://twitter.com/emi11882681">
                                <a>
                                    <Image
                                        src={iconTW}
                                        alt="twitter"
                                    />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://twitter.com/emi11882681">
                                <a>
                                    <Image
                                        src={iconFB}
                                        alt="fb"
                                    />
                                </a></Link>
                        </li>
                        <li>
                            <Link href="https://twitter.com/emi11882681">
                                <a>
                                    <Image
                                        src={iconLines}
                                        alt="lines"
                                    />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div >
        </div>
    )
}