"use client";

import tpcStyles from './tpc.module.css'
import React, { useState, useRef, useEffect } from 'react';
import styles from 'app/work/projects/projects.module.css'
import Navbar from 'app/components/nav/nav'
import Footer from 'app/components/footer/footer'

export default function Home() {

  const headerh1 = useRef(null);
  const headerh2 = useRef(null);
  const viewButton = useRef(null);
  const scrollButton = useRef(null);
  useEffect(() => {
    headerh1.current.classList.add(styles.anim);
    headerh2.current.classList.add(styles.anim);
    viewButton.current.classList.add(styles.anim);
    scrollButton.current.classList.add(styles.anim);
  }, []);

  return (


    <main className={tpcStyles.main}>
      <Navbar></Navbar>
      <section id={styles.context}>
        <div className={styles.contextContent}>
          <div className={styles.headers}>
            <h1 className={styles.headersH1} ref={headerh1}>Tiger Princess Club -</h1>
            <h2 className={styles.headersH2} ref={headerh2}>An NFT Club Like No Other</h2>
          </div>

          <div className={styles.button} ref={viewButton}>
            <a href="https://www.tigerprincessclub.com" target="_blank">
              View The Project
            </a>
          </div>
          <div className={styles.scrollP} ref={scrollButton}>
            <a>Scroll For More</a>
          </div>
        </div>
      </section>

      <section id={styles.summary}>
        <div className={styles.summaryContent}>
          <div className={styles.leftBrief}>
            <h1>
            Beyond trends and hashtags, Tiger Princess Club ignites a digital sisterhood of empowered women. Own a unique, NFT-forged tiger, a testament to your strength, diversity, and defiant spirit. Join the movement and leave paw prints on the world - one fierce tiger at a time.            </h1>
          </div>
          <div className={styles.rightBrief}>
            <div className={styles.infoCard}>
              <h3>
                Client
                <div className={styles.cardLine} />
              </h3>
              <h2>Tiger Princess Club</h2>
            </div>

            <div className={styles.infoCard}>
              <h3>
                Project Role
                <div className={styles.cardLine} />
              </h3>
              <h2>UI Design & Development</h2>
            </div>

            <div className={styles.infoCard}>
              <h3>
                Year
                <div className={styles.cardLine} />
              </h3>
              <h2>2021</h2>
            </div>
          </div>
        </div>
      </section>

      <section id={styles.viewport}>
        <section id={styles.viewport}>
          <div className={styles.innerViewport}>
            <img
              src="/img/workImg/tpcWorkSection.png"
              alt=""
            />
          </div>
        </section>
      </section>

      <section className={styles.probSol}>
        <div id={styles.projDescriptionInverse}>
          <div className={styles.projDescriptionLeft}>
            <h1>
              The Problem
            </h1>
          </div>
          <div className={styles.projDescriptionRight}>
            <h1>
            Women's empowerment often gets lost in buzzwords and empty symbolism. Existing initiatives can feel exclusionary, lacking diversity and true depth. Many women crave a sense of belonging, a celebration of their unique strengths, and a platform to inspire each other. Where can they find their roar, connect with like-minded souls, and leave a lasting impact?</h1>
          </div>
        </div>
        <div id={styles.projDescription}>
          <div className={styles.projDescriptionLeft}>
            <h1>
              The Solution
            </h1>
          </div>
          <div className={styles.projDescriptionRight}>
            <h1>
            Tiger Princess Club ignites a revolution of female power. Through stunning, diverse tiger-themed NFTs, it creates a vibrant digital community where women of all backgrounds unite under the banner of courage, resilience, and strength. Owning a Tiger NFT isn't just collecting art, it's joining a movement. Members gain access to exclusive events, mentorship programs, and philanthropic initiatives, empowering each other to roar louder and leave paw prints on the world. Tiger Princess Club transforms online connections into real-world action, fostering a sisterhood that shatters glass ceilings and rewrites the narrative of female empowerment.

</h1>
          </div>
        </div>
      </section>
      <section id={styles.moreprojects}>
        <div className={styles.moreProjectsWrapper}>
          <h2>More Projects</h2>
          <div className={styles.moreProjectsTable}>
            <table>
              <tbody>
              <div>
                                <a href={'/work/projects/jambox-games'}>
                                    <tr>
                                        <td className={styles.title}>Jambox Games</td>
                                        <td className={styles.midColumn}>Game Publisher</td>
                                        <td>2023</td>
                                    </tr>
                                </a>
                                </div>

                                <div>
                                <a href={'/work/projects/cosmonats'}>
                                    <tr>
                                        <td className={styles.title}>Cosmonats</td>
                                        <td className={styles.midColumn}>NFT Game</td>
                                        <td>2023</td>
                                    </tr>
                                </a>
                                </div>
                                <div>
                                <a href={'/work/projects/taeger-art'}>
                                    <tr>
                                        <td className={styles.title}>Taeger.Art</td>
                                        <td className={styles.midColumn}>Artist Portfolio</td>
                                        <td>2023</td>
                                    </tr>
                                </a>
                                </div>
                                <div>
                                <a href={'/work/projects/octavo-press'}>
                                    <tr>
                                        <td className={styles.title}>Octavo Press</td>
                                        <td className={styles.midColumn}>Book Publishing</td>
                                        <td>2022</td>
                                    </tr>
                                </a>
                                </div>

                                <div>
                                <a href={'/work/projects/terminal-charging'}>
                                    <tr>
                                        <td className={styles.title}>Terminal Charging</td>
                                        <td className={styles.midColumn}>EV Startup</td>
                                        <td>2022</td>
                                    </tr>
                                </a>
                                </div>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer></Footer>

    </main>
  )
}
