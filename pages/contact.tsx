import { NextPage } from "next"
import styles from '../styles/Home.module.css'
import Form from "../components/Form/Form";

const Contact: NextPage = () => {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.content_inner}>
                    <section>
                        <h2>contact</h2>
                        <Form />
                    </section>
                </div>
            </div>
        </>
    )
}

export default Contact