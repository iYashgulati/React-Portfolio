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
                         Jambox Games transcends the hypercasual horizon, infusing them with strategic real-time multiplayer. No more bots, no more monotony. Welcome to the future of hypercasual, where every tap fuels the thrill of victory.
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
                            src="/img/workImg/jamboxWorkSection.jpg"
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
                        Mobile hypercasual games often fall flat due to their solitary nature. Simple mechanics and repetitive gameplay lead to boredom and disengagement. Players crave deeper connections and a sense of achievement beyond individual high scores. Social elements and long-term goals are virtually absent, turning these games into fleeting distractions rather than engaging experiences.
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
                        Jambox Games injects adrenaline into hypercasuals by introducing real-time multiplayer features. Imagine racing through levels with friends, strategizing against rivals, and dominating leaderboards. With Jambox Games, hypercasuals evolve from solo playgrounds to vibrant social arenas, transforming bite-sized fun into epic multiplayer adventures.
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
                                        <td className={styles.title}>Taeger.art</td>
                                        <td className={styles.midColumn}> Artist Portfolio</td>
                                        <td>2023</td>
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

                                <div>
                                <a href={'/work/projects/terminal-charging'}>
                                    <tr>
                                        <td className={styles.title}>Terminal Charging</td>
                                        <td className={styles.midColumn}>EV Startup</td>
                                        <td>2022</td>
                                    </tr>
                                </a>
                                </div>

                                <div>
                                <a href={'/work/projects/octavo-press'}>
                                    <tr>
                                        <td className={styles.title}>Octavo Press</td>
                                        <td className={styles.midColumn}>Book Publishing</td>
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
