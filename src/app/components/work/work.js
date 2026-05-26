"use client";

import { useEffect, useRef } from 'react'
import styles from './work.module.css'
const shape041 = '/img/shapes/Shape041.png'
const shape087 = '/img/shapes/Shape087.png'
const shape053 = '/img/shapes/Shape053.png'


export default function Home() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cards = entry.target.querySelectorAll('[class*="projectCard"]')
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add(styles.visible)
                            }, index * 200)
                        })
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) observer.observe(sectionRef.current)

        return () => observer.disconnect()
    }, [])

    return (
            <div className={styles.homeContent}>
                <div className={styles.dotted}></div>
                <img src={shape041} className={styles.shape041} alt="Decorative shape" />
                <img src={shape087} className={styles.shape087} alt="Decorative shape" />
                <img src={shape053} className={styles.shape053} alt="Decorative shape" />

                <div className={styles.workContent} ref={sectionRef}>
                    <div className={styles.headerSection}>
                        <p className={styles.workLabel}>Portfolio Showcase</p>
                        <h1 className={styles.workTitle}>Featured <span className={styles.gradientText}>Creations</span></h1>
                    </div>

                    <div className={styles.projectsGrid}>
                        {/* Project 1 - Jambox Games */}
                        <a href="/work/projects/jambox-games" className={styles.projectCard}>
                            <div className={styles.projectImageWrapper}>
                                <div className={styles.projectImage} style={{backgroundImage: "url('/img/workImg/jamboxWorkSection.jpg')"}} />
                                <div className={styles.projectOverlay}>
                                    <span className={styles.projectNumber}>01</span>
                                </div>
                            </div>
                            <div className={styles.projectInfo}>
                                <div className={styles.projectCategory}>Gaming Platform</div>
                                <h3 className={styles.projectTitle}>Jambox Games</h3>
                                <p className={styles.projectDescription}>
                                    Empowering Southeast Asian developers with multiplayer technology for hypercasual games
                                </p>
                                <div className={styles.projectTags}>
                                    <span>UI/UX Design</span>
                                    <span>Development</span>
                                    <span>2023</span>
                                </div>
                            </div>
                        </a>

                        {/* Project 2 - Tiger Princess NFT */}
                        <a href="/work/projects/tiger-princess-club" className={styles.projectCard}>
                            <div className={styles.projectImageWrapper}>
                                <div className={styles.projectImage} style={{backgroundImage: "url('/img/workImg/tpcWorkSection.jpg')"}} />
                                <div className={styles.projectOverlay}>
                                    <span className={styles.projectNumber}>02</span>
                                </div>
                            </div>
                            <div className={styles.projectInfo}>
                                <div className={styles.projectCategory}>NFT Collection</div>
                                <h3 className={styles.projectTitle}>Tiger Princess Club</h3>
                                <p className={styles.projectDescription}>
                                    Exclusive NFT collection with party perks for woman-empowered digital collectibles
                                </p>
                                <div className={styles.projectTags}>
                                    <span>Full Development</span>
                                    <span>Web3</span>
                                    <span>2022</span>
                                </div>
                            </div>
                        </a>

                        {/* Project 3 - Terminal Charging */}
                        <a href="/work/projects/terminal-charging" className={styles.projectCard}>
                            <div className={styles.projectImageWrapper}>
                                <div className={styles.projectImage} style={{backgroundImage: "url('/img/workImg/tcWorkSection.jpg')"}} />
                                <div className={styles.projectOverlay}>
                                    <span className={styles.projectNumber}>03</span>
                                </div>
                            </div>
                            <div className={styles.projectInfo}>
                                <div className={styles.projectCategory}>EV Startup</div>
                                <h3 className={styles.projectTitle}>Terminal Charging</h3>
                                <p className={styles.projectDescription}>
                                    Streamlining electric vehicle charging to make it affordable and accessible
                                </p>
                                <div className={styles.projectTags}>
                                    <span>Full Development</span>
                                    <span>Startup</span>
                                    <span>2022</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={styles.viewAllWrapper}>
                        <a href="/work" className={styles.viewAllButton}>
                            View All Projects
                            <span className={styles.buttonArrow}>→</span>
                        </a>
                        <a href="https://github.com/iYashgulati" target="_blank" rel="noopener noreferrer" className={styles.githubButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            View GitHub
                        </a>
                    </div>
                </div>
            </div>
    )
}

