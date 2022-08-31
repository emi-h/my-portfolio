import { Progress } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import BranchImg from "public/i_forkshape.svg";
import StarImg from "public/i_star.svg";
import React from "react";
import { FC } from "react";
import { Btn } from "src/components/Btn/Btn";
import styles from "src/components/CodeContent/CodeContent.module.css";

export const CodeContent: FC = () => {
  return (
    <section className={styles.github} id="github">
      <h2>github</h2>
      <div className={styles.github_body}>
        <ul>
          <li>
            <Link href="#">
              <a>
                <h3>lightsound/nexst-tailwind</h3>
                <p>Next.js starter template.</p>
                <div className={styles.icons}>
                  <div className={styles.icon}>
                    <span>
                      <Image src={StarImg} alt="star" />
                    </span>
                    <span>117</span>
                  </div>
                  <div className={styles.icon}>
                    <span>
                      <Image src={BranchImg} alt="branch" />
                    </span>
                    <span>18</span>
                  </div>
                </div>
                <div className={styles.langArea}>
                  <Progress
                    sections={[
                      { color: "#3178C6", value: 65.5 },
                      { color: "#F1E05A", value: 33.7 },
                      { color: "#EDEDED", value: 0.8 },
                    ]}
                  />
                  <div className={styles.langText}>
                    <span className={styles.lang}>
                      <span>TypeScript</span>
                      <span className={styles.ratio}>65.5%</span>
                    </span>
                    <span className={styles.lang}>
                      <span>JavaScript</span>
                      <span className={styles.ratio}>33.7%</span>
                    </span>
                    <span className={styles.lang}>
                      <span>Other</span>
                      <span className={styles.ratio}>0.8%</span>
                    </span>
                  </div>
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <h3>lightsound/nexst-tailwind</h3>
                <p>Next.js starter template.</p>
                <div className={styles.icons}>
                  <div className={styles.icon}>
                    <span>
                      <Image src={StarImg} alt="star" />
                    </span>
                    <span>117</span>
                  </div>
                  <div className={styles.icon}>
                    <span>
                      <Image src={BranchImg} alt="branch" />
                    </span>
                    <span>18</span>
                  </div>
                </div>
                <div className={styles.langArea}>
                  <Progress
                    sections={[
                      { color: "#3178C6", value: 65.5 },
                      { color: "#F1E05A", value: 33.7 },
                      { color: "#EDEDED", value: 0.8 },
                    ]}
                  />
                  <div className={styles.langText}>
                    <span className={styles.lang}>
                      <span>TypeScript</span>
                      <span className={styles.ratio}>65.5%</span>
                    </span>
                    <span className={styles.lang}>
                      <span>JavaScript</span>
                      <span className={styles.ratio}>33.7%</span>
                    </span>
                    <span className={styles.lang}>
                      <span>Other</span>
                      <span className={styles.ratio}>0.8%</span>
                    </span>
                  </div>
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <h3>lightsound/nexst-tailwind</h3>
                <p>Next.js starter template.</p>
                <div className={styles.icons}>
                  <div className={styles.icon}>
                    <span>
                      <Image src={StarImg} alt="star" />
                    </span>
                    <span>117</span>
                  </div>
                  <div className={styles.icon}>
                    <span>
                      <Image src={BranchImg} alt="branch" />
                    </span>
                    <span>18</span>
                  </div>
                </div>
                <div className={styles.langArea}>
                  <Progress
                    sections={[
                      { color: "#3178C6", value: 65.5 },
                      { color: "#F1E05A", value: 33.7 },
                      { color: "#EDEDED", value: 0.8 },
                    ]}
                  />
                  <div className={styles.langText}>
                    <span className={styles.lang}>
                      <span>TypeScript</span>
                      <span className={styles.ratio}>65.5%</span>
                    </span>
                    <span className={styles.lang}>
                      <span>JavaScript</span>
                      <span className={styles.ratio}>33.7%</span>
                    </span>
                    <span className={styles.lang}>
                      <span>Other</span>
                      <span className={styles.ratio}>0.8%</span>
                    </span>
                  </div>
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <h3>lightsound/nexst-tailwind</h3>
                <p>Next.js starter template.</p>
                <div className={styles.icons}>
                  <div className={styles.icon}>
                    <span>
                      <Image src={StarImg} alt="star" />
                    </span>
                    <span>117</span>
                  </div>
                  <div className={styles.icon}>
                    <span>
                      <Image src={BranchImg} alt="branch" />
                    </span>
                    <span>18</span>
                  </div>
                </div>
                <div className={styles.langArea}>
                  <Progress
                    sections={[
                      { color: "#3178C6", value: 65.5 },
                      { color: "#F1E05A", value: 33.7 },
                      { color: "#EDEDED", value: 0.8 },
                    ]}
                  />
                  <div className={styles.langText}>
                    <span className={styles.lang}>
                      <span>TypeScript</span>
                      <span className={styles.ratio}>65.5%</span>
                    </span>
                    <span className={styles.lang}>
                      <span>JavaScript</span>
                      <span className={styles.ratio}>33.7%</span>
                    </span>
                    <span className={styles.lang}>
                      <span>Other</span>
                      <span className={styles.ratio}>0.8%</span>
                    </span>
                  </div>
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <h3>lightsound/nexst-tailwind</h3>
                <p>Next.js starter template.</p>
                <div className={styles.icons}>
                  <div className={styles.icon}>
                    <span>
                      <Image src={StarImg} alt="star" />
                    </span>
                    <span>117</span>
                  </div>
                  <div className={styles.icon}>
                    <span>
                      <Image src={BranchImg} alt="branch" />
                    </span>
                    <span>18</span>
                  </div>
                </div>
                <div className={styles.langArea}>
                  <Progress
                    sections={[
                      { color: "#3178C6", value: 65.5 },
                      { color: "#F1E05A", value: 33.7 },
                      { color: "#EDEDED", value: 0.8 },
                    ]}
                  />
                  <div className={styles.langText}>
                    <span className={styles.lang}>
                      <span>TypeScript</span>
                      <span className={styles.ratio}>65.5%</span>
                    </span>
                    <span className={styles.lang}>
                      <span>JavaScript</span>
                      <span className={styles.ratio}>33.7%</span>
                    </span>
                    <span className={styles.lang}>
                      <span>Other</span>
                      <span className={styles.ratio}>0.8%</span>
                    </span>
                  </div>
                </div>
              </a>
            </Link>
          </li>
        </ul>
        <Btn text="View on GitHub" url="https://github.com/emi-h" />
      </div>
    </section>
  );
};
