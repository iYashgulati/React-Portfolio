"use client";

import { useEffect, useRef } from 'react'
import styles from './page.module.css'
import Navbar from 'app/components/nav/nav'
import Footer from 'app/components/footer/footer'

const shape014 = '/img/shapes/Shape014.png'
const shape028 = '/img/shapes/Shape028.png'
const shape035 = '/img/shapes/Shape035.png'
const shape041 = '/img/shapes/Shape041.png'
const shape053 = '/img/shapes/Shape053.png'
const shape064 = '/img/shapes/Shape064.png'
const shape087 = '/img/shapes/Shape087.png'
const shape107 = '/img/shapes/Shape107.png'

// Project images
const jamboxImg = '/img/workImg/jamboxWorkSection.jpg'
const cosmonautsImg = '/img/workImg/cosmonatsWorkSection.jpg'
const taegerImg = '/img/workImg/taWorkSection.jpg'
const tpcImg = '/img/workImg/tpcWorkSection.jpg'
const tcImg = '/img/workImg/tcWorkSection.jpg'
const opImg = '/img/workImg/opWorkSection.jpg'

export default function Work() {
  const heroRef = useRef(null)
  const projectRefs = useRef([])

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

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Jambox Games",
      year: "2023",
      category: "Game Platform",
      description: "A revolutionary multiplayer gaming platform bringing Southeast Asian developers to the forefront of hypercasual gaming.",
      tags: ["UI/UX Design", "React", "Web Development"],
      image: jamboxImg,
      link: "/work/projects/jambox-games"
    },
    {
      title: "Cosmonats",
      year: "2023",
      category: "NFT Game",
      description: "An innovative NFT-based gaming experience combining blockchain technology with engaging gameplay mechanics.",
      tags: ["Web3", "React", "Game Design"],
      image: cosmonautsImg,
      link: "/work/projects/cosmonats"
    },
    {
      title: "Taeger.art",
      year: "2023",
      category: "Artist Portfolio",
      description: "A stunning portfolio website showcasing contemporary art with an immersive digital experience.",
      tags: ["Portfolio", "Animation", "Design"],
      image: taegerImg,
      link: "/work/projects/taeger-art"
    },
    {
      title: "Tiger Princess Club",
      year: "2022",
      category: "NFT Club",
      description: "An exclusive NFT community platform celebrating women empowerment through digital art and blockchain.",
      tags: ["Web3", "Community", "NFT"],
      image: tpcImg,
      link: "/work/projects/tiger-princess-club"
    },
    {
      title: "Terminal Charging",
      year: "2022",
      category: "EV Startup",
      description: "Streamlining the electric vehicle charging experience with innovative technology and accessible solutions.",
      tags: ["Startup", "Green Tech", "UI/UX"],
      image: tcImg,
      link: "/work/projects/terminal-charging"
    },
    {
      title: "Octavo Press",
      year: "2023",
      category: "Publishing",
      description: "A modern book publishing platform connecting authors with readers through digital innovation.",
      tags: ["Publishing", "Platform", "Design"],
      image: opImg,
      link: "/work/projects/octavo-press"
    }
  ]

  return (
    <main className={styles.workPage}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero} ref={heroRef}>
        <img src={shape014} className={styles.shape1} alt="Decorative shape" />
        <img src={shape064} className={styles.shape2} alt="Decorative shape" />
        <img src={shape087} className={styles.shape3} alt="Decorative shape" />

        <div className={styles.heroContent}>
          <p className={styles.heroLabel}>Portfolio</p>
          <h1>
            Selected <span className={styles.gradientText}>Works</span>
          </h1>
          <p className={styles.heroSubtitle}>
            A collection of projects showcasing 5+ years of experience in web development,
            design, and digital innovation.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <img src={shape041} className={styles.shape4} alt="Decorative shape" />
        <img src={shape028} className={styles.shape5} alt="Decorative shape" />
        <img src={shape107} className={styles.shape6} alt="Decorative shape" />
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h2>5+</h2>
              <p>Years Experience</p>
            </div>
            <div className={styles.statCard}>
              <h2>6</h2>
              <p>Featured Projects</p>
            </div>
            <div className={styles.statCard}>
              <h2>∞</h2>
              <p>Cups of Coffee</p>
            </div>
            <a href="https://github.com/iYashgulati" target="_blank" rel="noopener noreferrer" className={`${styles.statCard} ${styles.githubStatCard}`}>
              <div className={styles.githubIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h2>View Code</h2>
              <p>On GitHub →</p>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={styles.projectsSection}>
        <img src={shape053} className={styles.shape7} alt="Decorative shape" />
        <img src={shape035} className={styles.shape8} alt="Decorative shape" />
        <img src={shape014} className={styles.shape9} alt="Decorative shape" />
        <img src={shape064} className={styles.shape10} alt="Decorative shape" />
        <div className={styles.container}>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <a
                href={project.link}
                key={index}
                className={styles.projectCard}
                ref={(el) => (projectRefs.current[index] = el)}
              >
                <div className={styles.projectImage}>
                  <img src={project.image} alt={project.title} />
                  <div className={styles.projectOverlay}>
                    <span className={styles.viewProject}>View Project →</span>
                  </div>
                </div>
                <div className={styles.projectInfo}>
                  <div className={styles.projectHeader}>
                    <h3>{project.title}</h3>
                    <span className={styles.projectYear}>{project.year}</span>
                  </div>
                  <p className={styles.projectCategory}>{project.category}</p>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectTags}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
