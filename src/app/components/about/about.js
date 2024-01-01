"use client";

import styles from './about.module.css'
const shape041 = '/img/shapes/Shape041.png'
const shape035 = '/img/shapes/Shape035.png'
import React, { useState, useRef, useEffect } from 'react'

export default function Home() {

	const dottedbg = useRef(null)
	const homeContent = useRef(null)

	if (dottedbg.height < homeContent.height) {
		console.log("hi")
	} 
  return (
            <div class={styles.homeContent} ref={homeContent}>
            <div class={styles.dotted} ref={dottedbg}></div>
			<div class={styles.aboutImages}>
				<img src={shape041} class={styles.aboutTopRightBlur}></img>
			</div>

			<div class={styles.aboutContent}>
				<div class={styles.aboutLeft}>
					<h5> About Me </h5>
					<h1>A young, passionate developer, looking to spread his influence.</h1>
					<p >Hello! I'm Yash and I'm a passionate web developer with more than 5 years of experience under my belt. My love for creating and developing has been with me throughout my life, even before I ever learned to code. Fast forward to today, I relish helping people achieve their goals and dreams!					</p>
					<a href={'https://www.fiverr.com/yash2007'}>Check Me Out On Fiverr</a>
				</div>

				<div class={styles.aboutRight}>
					<img src={shape035} alt=""></img>
				</div>
			</div>
            </div>
  )
}