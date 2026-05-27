"use client";

import styles from './about.module.css'
const shape041 = '/img/shapes/Shape041.png'
const shape035 = '/img/shapes/Shape035.png'
import React, { useRef, useEffect } from 'react'

export default function About() {
	const sectionRef = useRef(null)
	const contentRef = useRef(null)
	const imageRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add(styles.visible)
					}
				})
			},
			{ threshold: 0.1 }
		)

		if (contentRef.current) {
			observer.observe(contentRef.current)
		}
		if (imageRef.current) {
			observer.observe(imageRef.current)
		}

		return () => observer.disconnect()
	}, [])

	useEffect(() => {
		const handleMouseMove = (e) => {
			if (imageRef.current) {
				const img = imageRef.current.querySelector('img')
				if (img) {
					const { clientX, clientY } = e
					const { innerWidth, innerHeight } = window

					// Calculate rotation based on mouse position
					const xRotation = ((clientY / innerHeight) - 0.5) * 20 // -10 to 10 degrees
					const yRotation = ((clientX / innerWidth) - 0.5) * 20 // -10 to 10 degrees

					img.style.transform = `perspective(1000px) rotateX(${-xRotation}deg) rotateY(${yRotation}deg)`
				}
			}
		}

		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [])

	return (
		<div className={styles.homeContent} ref={sectionRef}>
			<div className={styles.aboutImages}>
				<img
					src={shape041}
					className={styles.aboutTopRightBlur}
					alt="Decorative shape"
				/>
			</div>

			<div className={styles.aboutContent}>
				<div className={styles.aboutLeft} ref={contentRef}>
					<h5>About Me</h5>
					<h1>Building from <span className={styles.purpleText}>Web Dev</span> to <span className={styles.purpleText}>Machine Learning.</span></h1>
					<p>
						I am Yash, a computer engineering student passionate about AI and machine learning.
						My journey started with 5 years of web development, where I learned to build and ship digital products.
						Now I'm a student diving into ML/AI, eager to explore how intelligent systems can transform
						the way we solve problems and create impact.
					</p>
					<a href="https://www.linkedin.com/in/iamyashgulati/" target="_blank" rel="noopener noreferrer">
						<span>Connect on LinkedIn</span>
						<span className={styles.buttonArrow}>→</span>
					</a>
				</div>

				<div className={styles.aboutRight} ref={imageRef}>
					<img src={shape035} alt="Decorative geometric shape" />
				</div>
			</div>
		</div>
	)
}