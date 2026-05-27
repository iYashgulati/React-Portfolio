"use client";

import styles from './index.module.css'
import { useEffect, useRef } from 'react'

const shape014 = '/img/shapes/Shape014.png'
const shape064 = '/img/shapes/Shape064.png'
const Shape107 = '/img/shapes/Shape107.png'

export default function Index() {
    const heroRef = useRef(null)
    const h1Ref = useRef(null)
    const h2Ref = useRef(null)
    const shape1Ref = useRef(null)
    const shape2Ref = useRef(null)
    const shape3Ref = useRef(null)

    useEffect(() => {
        // Trigger entrance animations
        if (heroRef.current) {
            heroRef.current.classList.add(styles.fadeIn)
        }
        if (h1Ref.current) {
            setTimeout(() => {
                h1Ref.current.classList.add(styles.slideInUp)
            }, 200)
        }
        if (h2Ref.current) {
            setTimeout(() => {
                h2Ref.current.classList.add(styles.slideInUp)
            }, 400)
        }

        // Add floating animation to shapes
        if (shape1Ref.current) {
            shape1Ref.current.classList.add(styles.float)
        }
        if (shape2Ref.current) {
            setTimeout(() => {
                shape2Ref.current.classList.add(styles.float)
            }, 200)
        }
        if (shape3Ref.current) {
            setTimeout(() => {
                shape3Ref.current.classList.add(styles.float)
            }, 400)
        }
    }, [])

    return (
        <section id={styles.btsHome} ref={heroRef}>
            <div id="img">
                <img
                    src={shape014}
                    className={styles.homepageImg1}
                    alt="Decorative shape"
                    ref={shape1Ref}
                />
                <img
                    src={Shape107}
                    className={styles.homepageImg2}
                    alt="Decorative shape"
                    ref={shape2Ref}
                />
                <img
                    src={shape064}
                    className={styles.homepageImg3}
                    alt="Decorative shape"
                    ref={shape3Ref}
                />
            </div>
            <div className={styles.dotted}></div>
            <div className={styles.homeContent}>
                <div className={styles.homeLeft}>
                    <h1 ref={h1Ref}>
                        Hello — I'm <span className={styles.gradientText}>Yash.</span><br />
                        An Aspiring Computer Engineer.
                    </h1>

                    <h2 ref={h2Ref}>
                        Building digital experiences through code — from web developmenta
                        to robotics, exploring how software shapes the physical world.
                    </h2>
                </div>
                <div className={styles.homeRight}></div>
            </div>
        </section>
    );
}
