import { Burger, Button, MediaQuery } from "@mantine/core"
import { useState } from 'react';
import { useToggle } from '@mantine/hooks';
import styles from '../styles/Header.module.css'
import Link from "next/link";

export const Header = () => {
    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';
    const BurgerOpenClass = opened ? styles.close : '';
    const navOpenStyle = opened ? styles.open : '';
    const BurgerFixed = opened ? styles.fixed : '';
    const [value, toggle] = useToggle(['🌙', '☀️']);

    return (
        <header className={styles.header}>
            <div className={styles.header_inner}>
                <MediaQuery largerThan="xs" styles={{ display: 'none' }}>
                    <div className={`${styles.btnBurger} ${BurgerFixed}`}>
                        <Burger
                            opened={opened}
                            onClick={() => setOpened((o) => !o)}
                            title={title}
                            className={BurgerOpenClass}
                            size={18}
                            color={opened ? "#fff" : ""}
                        />
                    </div>
                </MediaQuery>
                <h1 className={styles.logo}><Link href="/"><a>Emi Portfolio</a></Link></h1>
                <div className={styles.navArea}>
                    <nav className={`${styles.nav} ${navOpenStyle}`}>
                        <ul>
                            <li><Link href="/about"><a>about</a></Link></li>
                            <li><Link href="/blog"><a>blog</a></Link></li>
                            <li><Link href="/portfolio"><a>portfolio</a></Link></li>
                            <li><Link href="/contact"><a>contact</a></Link></li>
                        </ul>
                    </nav>
                    <div className={styles.btn_toggle}>
                        <Button variant="default" radius="xs" size="xs" onClick={() => toggle()}>
                            {value}
                        </Button>
                    </div>
                </div>
            </div>
        </header >
    )
}