"use client";

import jamStyles from './jambox.module.css'
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

        <main className={jamStyles.main}>
            <Navbar></Navbar>
            <section id={styles.context}>
                <div className={styles.contextContent}>
                    <div className={styles.headers}>
                        <h1 className={styles.headersH1} ref={headerh1}>Jambox Games -</h1>
                        <h2 className={styles.headersH2} ref={headerh2}>A Next-Gen Game Platform</h2>
                    </div>

                    <div className={styles.button} ref={viewButton}>
                        <a href="https://www.jambox.games" target="_blank">
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
                            Another project in the hot space of
                            <span className={styles.bold}>cryptos and NFTS, </span> this unique NFT club
                            aims to provide unparalleled utility for its holders and also
                            support the calls for <span className={styles.bold}>womensRights</span> all
                            around the world.
                        </h1>
                    </div>
                    <div className={styles.rightBrief}>
                        <div className={styles.infoCard}>
                            <h3>
                                Client
                                <div className={styles.cardLine} />
                            </h3>
                            <h2>Jambox Games</h2>
                        </div>

                        <div className={styles.infoCard}>
                            <h3>
                                Project Role
                                <div className={styles.cardLine} />
                            </h3>
                            <h2>Development Manager</h2>
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
                <section id={styles.viewport}>
                    <div className={styles.innerViewport}>
                        <img
                            src="/img/workImg/jamboxWorkSection.png"
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Consectetur dignissimos temporibus pariatur, id laboriosam animi
                            magnam minus non voluptates vitae possimus voluptate voluptatum qui
                            reprehenderit autem beatae fugit, vel nam!
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Consectetur dignissimos temporibus pariatur, id laboriosam animi
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
                        <div>
                        <table>
                            <tbody>
                                <div>
                                <a href={'#'}>
                                    <tr>
                                        <td className={styles.title}>SportApp</td>
                                        <td>Fitlife</td>
                                        <td>2023</td>
                                    </tr>
                                </a>
                                </div>

                                <div>
                                <a href={'#'}>
                                    <tr>
                                        <td className={styles.title}>SportApp</td>
                                        <td>Fitlife</td>
                                        <td>2023</td>
                                    </tr>
                                </a>
                                </div>

                                <div>
                                <a href={'#'}>
                                    <tr>
                                        <td className={styles.title}>SportApp</td>
                                        <td>Fitlife</td>
                                        <td>2023</td>
                                    </tr>
                                </a>
                                </div>

                                <div>
                                <a href={'#'}>
                                    <tr>
                                        <td className={styles.title}>SportApp</td>
                                        <td>Fitlife</td>
                                        <td>2023</td>
                                    </tr>
                                </a>
                                </div>

                                <div>
                                <a href={'#'}>
                                    <tr>
                                        <td className={styles.title}>SportApp</td>
                                        <td>Fitlife</td>
                                        <td>2023</td>
                                    </tr>
                                </a>
                                </div>

                            </tbody>
    
                            
                        </table>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </main>


    )
}
