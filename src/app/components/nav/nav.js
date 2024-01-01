"use client";

const logo = '/img/logo/logo.png'
import React, { useState, useRef, useEffect } from 'react';
import styles from './nav.module.css';
import navStyles from 'app/page.module.css'


export default function Navbar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (

    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={logo} alt=""></img>
      </div>
      <div className={styles.links} ref={links}>
        <a href="/">Home
          <div className={styles.line}></div>
        </a>
        <a href="/work/">Work
          <div className={styles.line}></div>
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