import { Burger, Button, MediaQuery } from "@mantine/core"
import { useState } from 'react';
import { useToggle } from '@mantine/hooks';
import styles from '../styles/Header.module.css'

export const Header = () => {
    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';
    const [value, toggle] = useToggle(['🌙', '☀️']);

    return (
        <header className={styles.header}>
            <div className={styles.header_inner}>
                <MediaQuery largerThan="xs" styles={{ display: 'none' }}>
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        title={title}
                    />
                </MediaQuery>
                <h1 className={styles.logo}>Emi Portfolio</h1>
                <nav className={styles.nav}>
                    <ul>
                        <li><a href="#about">about</a></li>
                        <li><a href="#blog">blog</a></li>
                        <li><a href="#portfolio">portfolio</a></li>
                        <li><a href="#contact">contact</a></li>
                    </ul>
                    <div className={styles.btn_toggle}>
                        <Button variant="default" radius="xs" size="xs" onClick={() => toggle()}>
                            {value}
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    )
}