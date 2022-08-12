import { ActionIcon, Burger, MediaQuery, useMantineColorScheme } from "@mantine/core"
import { FC, useState } from 'react';
import styles from '../styles/Header.module.css'
import Link from "next/link";
import { IconSun, IconMoonStars } from '@tabler/icons';

export const Header: FC = () => {
    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';
    const BurgerOpenClass = opened ? styles.close : '';
    const navOpenStyle = opened ? styles.open : '';
    const BurgerFixed = opened ? styles.fixed : '';
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

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
                        <ActionIcon
                            variant="outline"
                            color={dark ? 'yellow' : 'dark'}
                            onClick={() => toggleColorScheme()}
                            title="Toggle color scheme"
                        >
                            {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                        </ActionIcon>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header;