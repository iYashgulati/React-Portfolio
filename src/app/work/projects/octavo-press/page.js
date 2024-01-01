"use client";

import octavoStyles from './op.module.css'
import styles from '/Users/69830/Downloads/Personal/react-portfolio/portfolio/src/app/work/projects/projects.module.css'
import Navbar from '/Users/69830/Downloads/Personal/react-portfolio/portfolio/src/app/components/nav/nav'
import React, { useState, useRef, useEffect } from 'react';
import Footer from '/Users/69830/Downloads/Personal/react-portfolio/portfolio/src/app/components/footer/footer'


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
              Started by a <span className={styles.bold}>young author,</span> Octavo
              Press looks to publish <span className={styles.bold}>nail-biting
                books</span> which are enjoyable for all reading ages.
            </h1>
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
              The<br />
              Problem
            </h1>
          </div>
          <div className={styles.projDescriptionRight}>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur dignissimos temporibus pariatur, id laboriosam animi
              magnam minus non voluptates vitae possimus voluptate voluptatum qui
              reprehenderit autem beatae fugit, vel nam!
            </h1>
          </div>
        </div>
        <div id={styles.projDescription}>
          <div className={styles.projDescriptionLeft}>
            <h1>
              The<br />
              Solution
            </h1>
          </div>
          <div className={styles.projDescriptionRight}>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur dignissimos temporibus pariatur, id laboriosam animi
              magnam minus non voluptates vitae possimus voluptate voluptatum qui
              reprehenderit autem beatae fugit, vel nam!
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
      </section>
      <Footer></Footer>
    </main>
  )
}
