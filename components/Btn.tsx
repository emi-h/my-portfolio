import { FC } from 'react';
import styles from '../styles/Btn.module.css'

type BtnProps = {
    text: string;
    url: string;
}

const Btn: FC<BtnProps> = (props) => {
    return (
        <div className={styles.btn_wrapper}>
            <a className={styles.btn} href={props.url}>{props.text}</a>
        </div>
    )
}
export default Btn;