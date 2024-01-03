"use client";

import octavoStyles from './op.module.css'
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


    <main className={octavoStyles.main}>
      <Navbar></Navbar>
      <section id={styles.context}>
        <div className={styles.contextContent}>
          <div className={styles.headers}>
            <h1 className={styles.headerH1} ref={headerh1}>Octavo Press -</h1>
            <h2 className={styles.headerH2} ref={headerh2}>A New Book Publiciation</h2>
          </div>

          <div className={styles.button} ref={viewButton}>
            <a href="https://www.octavopress.com" target="_blank">
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
             Stories, woven with vibrant diversity and emotional complexity, ignite imaginations and challenge young heroes within. Delve into worlds where your hearts skip beats and every page whispers, "Grow a little taller, dream a little wilder."</h1>
          </div>

          <div className={styles.rightBrief}>
            <div className={styles.infoCard}>
              <h3>
                Client
                <div className={styles.cardLine} />
              </h3>
              <h2>Octavo Press</h2>
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
              <h2>2022</h2>
            </div>
          </div>
        </div>
      </section>

      <section id={styles.viewport}>
        <div className={styles.innerViewport}>
          <img
            src="/img/workImg/opWorkSection.png"
            alt=""
          />
        </div>
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
            Children's books often fall into predictable tropes, offering bland tales that fail to spark genuine curiosity and ignite imaginations. Bland heroes, cookie-cutter plots, and formulaic narratives leave youngsters longing for stories that truly resonate with their adventurous spirit and diverse experiences. Where are the heroes that reflect their own complexities, the worlds that challenge and inspire, and the adventures that leave them begging for more?</h1>
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
            Octavo Press rewrites the story of childhood reading. We craft captivating, multi-layered children's books that crackle with emotional depth, celebrate cultural diversity, and ignite young minds like a fantastical spark. Our heroes are relatable yet extraordinary, facing thrilling challenges that mirror the complexities of growing up. In Octavo Press stories, vibrant worlds blossom with hidden secrets, unexpected twists keep hearts pounding, and every page invites curiosity to unfurl. We don't just tell bedtime tales, we ignite lifelong journeys of reading, growth, and endless possibilities.</h1>
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
