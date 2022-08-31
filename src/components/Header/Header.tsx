import {
  ActionIcon,
  Burger,
  MediaQuery,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons";
import Link from "next/link";
import React from "react";
import { FC, useState } from "react";
import { navList } from "src/components/Header/navList";

import styles from "./Header.module.css";

export const Header: FC = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  const BurgerOpenClass = opened ? styles.close : "";
  const navOpenStyle = opened ? styles.open : "";
  const BurgerFixed = opened ? styles.fixed : "";
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const handleNavClose = () => {
    setOpened((opened) => !opened);
  };
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <MediaQuery largerThan="xs" styles={{ display: "none" }}>
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
        <h1 className={styles.logo}>
          <Link href="/">
            <a>Emi Portfolio</a>
          </Link>
        </h1>
        <div className={styles.navArea}>
          <nav className={`${styles.nav} ${navOpenStyle}`}>
            <ul>
              {navList.map((navItem, i) => (
                <li key={i}>
                  <Link href={navItem.href}>
                    <a onClick={handleNavClose}>{navItem.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.btn_toggle}>
            <ActionIcon
              variant="outline"
              color={dark ? "yellow" : "dark"}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
            </ActionIcon>
          </div>
        </div>
      </div>
    </header>
  );
};
