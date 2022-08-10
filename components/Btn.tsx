import styles from '../styles/Btn.module.css'

type BtnProps = {
    text: string;
    url: string;
}

export const Btn = (props: BtnProps) => {
    return (
        <div className={styles.btn_wrapper}>
            <a className={styles.btn} href={props.url}>{props.text}</a>
        </div>
    )
}