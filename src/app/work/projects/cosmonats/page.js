"use client";

import cosStyles from './cosmonats.module.css'
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


    <main className={cosStyles.main}>
      <Navbar></Navbar>

      <section id={styles.context}>
        <div className={styles.contextContent}>
          <div className={styles.headers}>
            <h1 className={styles.headersH1} ref={headerh1}>Cosmonats -</h1>
            <h2 className={styles.headersH2} ref={headerh2}>A Fun, New NFT Game</h2>
          </div>

          <div className={styles.button} ref={viewButton}>
            <a href="http://www.cosmonats.com" target="_blank">
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
            Transcend the mundane, ignite your ambition. Forge your legend in the crucible of player-driven empires and dynamic NFT ownership. Craft your interstellar avatar, a testament to your unique spirit, and command a fleet forged from ambition.
            </h1>
          </div>
          <div className={styles.rightBrief}>
            <div className={styles.infoCard}>
              <h3>
                Client
                <div className={styles.cardLine} />
              </h3>
              <h2>Cosmonats</h2>
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
              <h2>2023</h2>
            </div>
          </div>
        </div>
      </section>

      <section id={styles.viewport}>
        <section id={styles.viewport}>
          <div className={styles.innerViewport}>
            <img
              src="/img/workImg/cosmonatsWorkSection.png"
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
            Space games often relegate ownership and meaningful impact to developers, leaving players adrift in a pre-rendered universe. Grinding for fleeting rewards and navigating pre-written narratives can feel unrewarding, leaving the vast potential of space unfulfilled. Players crave true ownership, a stake in the cosmos, and the power to etch their story into the celestial tapestry.

</h1>
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
            Cosmonats transcends the bounds of traditional space games, beginning a new era of player-driven exploration powered by NFTs. Forge a one-of-a-kind avatar, own your interstellar assets, and conquer uncharted planets – all fueled by blockchain technology. Every decision echoes in the fabric of reality, shaping the fate of your empire and the very fabric of the frontier. In Cosmonats, the universe is no longer a playground, it's your canvas, your conquest, your NFT-empowered odyssey.

</h1>
          </div>
        </div>
      </section>
      {/* <section id={styles.moreprojects}>
        <div className={styles.moreProjectsWrapper}>
          <h2>More Projects</h2>
          <div className={styles.moreProjectsTable}>
            <table>
              <tbody>
                <a href={'#'}>
                  <tr>
                    <td className={styles.title}>SportApp</td>
                    <td>Fitlife</td>
                    <td>2023</td>
                  </tr>
                </a>
                <a href={'#'}>
                  <tr>
                    <td className={styles.title}>SportApp</td>
                    <td>Fitlife</td>
                    <td>2023</td>
                  </tr>
                </a>
                <a href={'#'}>
                  <tr>
                    <td className={styles.title}>SportApp</td>
                    <td>Fitlife</td>
                    <td>2023</td>
                  </tr>
                </a>

                <a href={'#'}>
                  <tr>
                    <td className={styles.title}>SportApp</td>
                    <td>Fitlife</td>
                    <td>2023</td>
                  </tr>
                </a>
                <a href={'#'}>
                  <tr>
                    <td className={styles.title}>SportApp</td>
                    <td>Fitlife</td>
                    <td>2023</td>
                  </tr>
                </a>

              </tbody>
            </table>
          </div>
        </div>
      </section> */}
      <Footer></Footer>
    </main>
  )
}
