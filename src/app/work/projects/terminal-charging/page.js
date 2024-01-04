"use client";

import tpcStyles from './tc.module.css'
import styles from 'app/work/projects/projects.module.css'
import Navbar from 'app/components/nav/nav'
import Footer from 'app/components/footer/footer'
import React, { useState, useRef, useEffect } from 'react';


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
            <h1 className={styles.headersH1} ref={headerh1}>Terra.energy -</h1>
            <h2 className={styles.headersH2} ref={headerh2}>A Start-Up Saving The World</h2>
          </div>

          <div className={styles.button} ref={viewButton}>
            <a href="https://www.terminalcharging.com" target="_blank">
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
            Terminal Charging disrupts the electric landscape, placing fast, reliable chargers where you truly live – integrated seamlessly into your daily routines. Ditch detours, reclaim freedom, and experience electric mobility recharged, one convenient kilowatt at a time.
            </h1>
          </div>
          <div className={styles.rightBrief}>
            <div className={styles.infoCard}>
              <h3>
                Client
                <div className={styles.cardLine} />
              </h3>
              <h2>Terra Energy</h2>
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
              src="/img/workImg/tcWorkSection.jpg"
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
            EV range anxiety remains a persistent roadblock. Limited charging infrastructure, inconvenient locations, and unreliable performance leave drivers feeling tethered to specific routes and schedules. The charging experience itself can be clunky, time-consuming, and often lacks integration with everyday destinations. This stifles EV adoption and limits the true potential of clean transportation.</h1>
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
            Terminal Charging recharges the future of electric mobility. We bring fast, reliable chargers directly to the places you already visit, like grocery stores, gyms, and shopping malls. No more detours, just seamless top-ups while you run errands or grab a coffee. Our intuitive platform simplifies the charging process and keeps you informed, eliminating anxiety and maximizing convenience. With Terminal Charging, electric cars become truly liberating, seamlessly woven into the fabric of your daily life.</h1>
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
                                <a href={'/work/projects/tiger-princess-club'}>
                                    <tr>
                                        <td className={styles.title}>Tiger Princess NFT</td>
                                        <td className={styles.midColumn}>NFT Club</td>
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
