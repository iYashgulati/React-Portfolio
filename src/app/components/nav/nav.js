"use client";

const logo = '/img/logo/logo.png'
import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './nav.module.css';
import navStyles from 'app/page.module.css'


export default function Navbar({ variant = 'default', bgColor = null }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const hamburger = useRef(null);
  const links = useRef(null)

  const handleHamburgerClick = () => {
    if(!hamburger.current.classList.contains(styles.anim)){
      hamburger.current.classList.add(styles.anim);
      links.current.classList.add(styles.linksCenter);
    } else {
      hamburger.current.classList.remove(styles.anim);
      links.current.classList.remove(styles.linksCenter);
    }
  };

  const navStyle = bgColor ? { background: `rgba(${bgColor}, 1)` } : {};
  const linksStyle = bgColor ? { background: `rgba(${bgColor}, 1)` } : {};

  return (

    <nav className={`${styles.nav} ${variant === 'colored' || bgColor ? styles.navColored : ''}`} style={navStyle}>
      <div className={styles.logo}>
        <img src={logo} alt=""></img>
      </div>
      <div className={styles.links} ref={links} style={linksStyle}>
        <a href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>Home
          <div className={styles.line}></div>
        </a>
        <a href="/about/" className={`${styles.navLink} ${pathname === '/about' || pathname === '/about/' ? styles.active : ''}`}>About
          <div className={styles.line}></div>
        </a>
        <a href="/work/" className={`${styles.navLink} ${pathname === '/work' || pathname === '/work/' ? styles.active : ''}`}>Work
          <div className={styles.line}></div>
        </a>
        <a href="https://www.linkedin.com/in/iamyashgulati/" target="_blank" rel="noopener noreferrer" className={styles.linkedinBtn} aria-label="LinkedIn Profile">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
          </svg>
        </a>
        <a href="https://github.com/iYashgulati" target="_blank" rel="noopener noreferrer" className={styles.githubBtn} aria-label="GitHub Profile">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="https://raw.githubusercontent.com/iYashgulati/Resume/main/resume.pdf" download="Yash_Gulati_Resume.pdf" className={styles.resumeBtn}>
          <span>Resume</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </a>
      </div>

      <div className={styles.hamburger} onClick={handleHamburgerClick} ref={hamburger}>
        <div id={styles.hamLine} className={styles.hamLineOne}></div>
        <div id={styles.hamLine} className={styles.hamLineTwo} ></div>
        <div id={styles.hamLine} className={styles.hamLineThree} ></div>

      </div>
    </nav>
  

  )
}