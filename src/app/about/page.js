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

export default function About() {
    const heroRef = useRef(null)
    const introRef = useRef(null)
    const educationSectionRef = useRef(null)
    const educationWrapperRef = useRef(null)
    const coursesRef = useRef(null)
    const clubsRef = useRef(null)
    const skillsRef = useRef(null)
    const ctaRef = useRef(null)

    useEffect(() => {
        // Make hero visible on load
        if (heroRef.current) {
            heroRef.current.classList.add(styles.visible)
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible)
                        // Also add visible class to all children cards
                        const cards = entry.target.querySelectorAll('[class*="Card"]')
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add(styles.visible)
                            }, index * 100)
                        })
                    }
                    // Don't remove visible class - keep elements visible once animated
                })
            },
            { threshold: 0.1 }
        )

        if (introRef.current) observer.observe(introRef.current)
        if (educationSectionRef.current) observer.observe(educationSectionRef.current)
        if (educationWrapperRef.current) observer.observe(educationWrapperRef.current)
        if (coursesRef.current) observer.observe(coursesRef.current)
        if (clubsRef.current) observer.observe(clubsRef.current)
        if (skillsRef.current) observer.observe(skillsRef.current)
        if (ctaRef.current) observer.observe(ctaRef.current)

        return () => observer.disconnect()
    }, [])

    return (
        <main className={styles.aboutPage}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero} ref={heroRef}>
                <img src={shape014} className={styles.shape1} alt="Decorative shape" />
                <img src={shape064} className={styles.shape2} alt="Decorative shape" />

                <div className={styles.heroContent}>
                    <p className={styles.heroLabel}>Get to Know</p>
                    <h1>
                        About <span className={styles.gradientText}>Me</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Developer & Student
                    </p>
                </div>
            </section>

            {/* About Me Intro Section */}
            <section className={styles.introSection} ref={introRef}>
                <img src={shape035} className={styles.introShape1} alt="Decorative shape" />
                <img src={shape041} className={styles.introShape2} alt="Decorative shape" />
                <img src={shape053} className={styles.introShape3} alt="Decorative shape" />
                <img src='/img/logo/PNG-02.png' className={styles.introSignature} alt="Signature watermark" />

                <div className={styles.container}>
                    <div className={styles.introContent}>
                        <p className={styles.introParagraph}>
                            I'm Yash Gulati, a Computer Engineering student at the University of Illinois
                            Urbana-Champaign. My background is a bit unconventional—I spent five years as a
                            freelance web developer before starting college, building everything from NFT platforms
                            to startup websites. That experience taught me not just how to code, but how to deliver
                            products that work.
                        </p>
                        <p className={styles.introParagraph}>
                            Now at UIUC, I'm studying robotics, machine learning, and embedded systems. The transition
                            from pure software to hardware-software integration has been fascinating—taking what I learned
                            in web development and applying it to physical systems and understanding how code interacts
                            with the real world.
                        </p>
                        <p className={styles.introParagraph}>
                            I'm drawn to projects at the intersection of software and the physical world—whether
                            that's autonomous systems, sustainable technology, or tools that genuinely improve how
                            we interact with technology. Still exploring where I'll specialize, but that's part of
                            the journey.
                        </p>
                        <div className={styles.introButtons}>
                            <a href="/resume.pdf" download="Yash_Gulati_Resume.pdf" className={styles.introResumeBtn}>
                                <span>Download Resume</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/iamyashgulati/" target="_blank" rel="noopener noreferrer" className={styles.introLinkedinBtn}>
                                <span>LinkedIn</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={styles.linkedinIcon}>
                                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                                </svg>
                            </a>
                            <a href="https://github.com/iYashgulati" target="_blank" rel="noopener noreferrer" className={styles.introGithubBtn}>
                                <span>GitHub</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={styles.githubIcon}>
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className={styles.educationSection} ref={educationSectionRef}>
                <img src={shape087} className={styles.shape3} alt="Decorative shape" />
                <img src={shape064} className={styles.educationShape1} alt="Decorative shape" />
                <img src={shape028} className={styles.educationShape2} alt="Decorative shape" />

                <div className={styles.container}>
                    <div className={styles.educationWrapper} ref={educationWrapperRef}>
                        <div className={styles.educationHeader}>
                            <p className={styles.educationLabel}>Education</p>
                            <h2 className={styles.educationTitle}>Academic <span className={styles.gradientText}>Journey</span></h2>
                        </div>

                        <div className={styles.educationCard}>
                            <div className={styles.educationCardHeader}>
                                <div className={styles.degreeInfo}>
                                    <div className={styles.degreeIcon}>
                                        <img src='/img/workImg/UIUC-Symbol.png' alt="UIUC Logo"></img>
                                    </div>
                                    <div>
                                        <h3 className={styles.degreeTitle}>Bachelor of Science, Computer Engineering</h3>
                                        <p className={styles.universityName}>University of Illinois at Urbana-Champaign</p>
                                        <p className={styles.minorInfo}>Minor in Computer Science</p>
                                    </div>
                                </div>
                                <div className={styles.statusContainer}>
                                    <div className={styles.statusPulse}></div>
                                    <span className={styles.statusBadge}>Currently Enrolled</span>
                                </div>
                            </div>

                            <div className={styles.educationDetails}>
                                <div className={styles.detailItem}>
                                    <div className={styles.detailIcon}>📅</div>
                                    <div>
                                        <p className={styles.detailLabel}>Expected Graduation</p>
                                        <p className={styles.detailValue}>2029</p>
                                    </div>
                                </div>
                                <div className={styles.detailItem}>
                                    <div className={styles.detailIcon}>💻</div>
                                    <div>
                                        <p className={styles.detailLabel}>Field of Study</p>
                                        <p className={styles.detailValue}>Computer Engineering, Statistics</p>
                                    </div>
                                </div>
                                <div className={styles.detailItem}>
                                    <div className={styles.detailIcon}>🌟</div>
                                    <div>
                                        <p className={styles.detailLabel}>Focus Areas</p>
                                        <p className={styles.detailValue}>AI, Machine Learning, Embedded Systems</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.honorsSection}>
                                <h4 className={styles.honorsTitle}>Honors & Recognition</h4>
                                <div className={styles.honorsList}>
                                    <div className={styles.honorItem}>
                                        <span className={styles.honorIcon}>🏅</span>
                                        <span>Dean's List (FA25)</span>
                                    </div>
                                    <div className={styles.honorItem}>
                                        <span className={styles.honorIcon}>⭐</span>
                                        <span>James Scholar</span>
                                    </div>
                                    <div className={styles.honorItem}>
                                        <span className={styles.honorIcon}>🎓</span>
                                        <span>Grainger Engineering Continuing Scholarship (FA26)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className={styles.coursesSection} ref={coursesRef}>
                <img src={shape028} className={styles.shape4} alt="Decorative shape" />
                <img src={shape087} className={styles.coursesShape1} alt="Decorative shape" />
                <img src={shape107} className={styles.coursesShape2} alt="Decorative shape" />
                <div className={styles.container}>
                    <p className={styles.sectionSubtitle}>
                        Building foundations in CS and engineering
                    </p>
                    <h2 className={styles.sectionTitle}>Relevant <span className={styles.gradientText}>Courses</span></h2>

                    <div className={styles.coursesGrid}>
                        <div className={styles.courseCard}>
                            <div className={styles.courseContent}>
                                <div className={styles.courseIcon}>🤖</div>
                                <div className={styles.courseInfo}>
                                    <h3>Robotics Team Project</h3>
                                    <p className={styles.courseDescription}>
                                        Fundamentals of Robotics and their applications in autonomous simulations.
                                    </p>
                                </div>
                            </div>
                            <p className={styles.courseCode}>CS 498</p>
                        </div>

                        <div className={styles.courseCard}>
                            <div className={styles.courseContent}>
                                <div className={styles.courseIcon}>🌳</div>
                                <div className={styles.courseInfo}>
                                    <h3>Data Structures & Algorithm</h3>
                                    <p className={styles.courseDescription}>
                                        Advanced study of data structures, algorithm design, and complexity analysis.
                                    </p>
                                </div>
                            </div>
                            <p className={styles.courseCode}>CS 225</p>
                        </div>

                        <div className={styles.courseCard}>
                            <div className={styles.courseContent}>
                                <div className={styles.courseIcon}>📊</div>
                                <div className={styles.courseInfo}>
                                    <h3>Statistics and Probability I</h3>
                                    <p className={styles.courseDescription}>
                                        Probability theory, distributions, and statistical inference methods.
                                    </p>
                                </div>
                            </div>
                            <p className={styles.courseCode}>STAT 400</p>
                        </div>

                        <div className={styles.courseCard}>
                            <div className={styles.courseContent}>
                                <div className={styles.courseIcon}>🖥️</div>
                                <div className={styles.courseInfo}>
                                    <h3>Introduction to Computing</h3>
                                    <p className={styles.courseDescription}>
                                        Computer architecture, digital logic, and low-level programming concepts.
                                    </p>
                                </div>
                            </div>
                            <p className={styles.courseCode}>ECE 120</p>
                        </div>

                        <div className={styles.courseCard}>
                            <div className={styles.courseContent}>
                                <div className={styles.courseIcon}>🔢</div>
                                <div className={styles.courseInfo}>
                                    <h3>Discrete Structures</h3>
                                    <p className={styles.courseDescription}>
                                        Mathematical foundations including logic, proofs, and graph theory.
                                    </p>
                                </div>
                            </div>
                            <p className={styles.courseCode}>CS 173</p>
                        </div>

                        <div className={styles.courseCard}>
                            <div className={styles.courseContent}>
                                <div className={styles.courseIcon}>⚡</div>
                                <div className={styles.courseInfo}>
                                    <h3>Introduction to Programming with C++</h3>
                                    <p className={styles.courseDescription}>
                                        Object-oriented programming, data structures, and algorithms in C++.
                                    </p>
                                </div>
                            </div>
                            <p className={styles.courseCode}>CS 128</p>
                        </div>
                        <div className={styles.courseCard}>
                            <div className={styles.courseContent}>
                                <div className={styles.courseIcon}>🔌</div>
                                <div className={styles.courseInfo}>
                                    <h3>Introduction to Electronics</h3>
                                    <p className={styles.courseDescription}>
                                        Circuit analysis, electronic components, and hands-on lab projects.
                                    </p>
                                </div>
                            </div>
                            <p className={styles.courseCode}>ECE 110</p>
                        </div>

                        <div className={styles.courseCard}>
                            <div className={styles.courseContent}>
                                <div className={styles.courseIcon}>☕</div>
                                <div className={styles.courseInfo}>
                                    <h3>Introduction to Programming with Java</h3>
                                    <p className={styles.courseDescription}>
                                        Object-oriented programming fundamentals and software design in Java.
                                    </p>
                                </div>
                            </div>
                            <p className={styles.courseCode}>CS 124</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clubs & Organizations Section */}
            <section className={styles.clubsSection} ref={clubsRef}>
                <img src={shape014} className={styles.shape5} alt="Decorative shape" />
                <img src={shape035} className={styles.clubsShape1} alt="Decorative shape" />
                <img src={shape053} className={styles.clubsShape2} alt="Decorative shape" />
                <div className={styles.container}>
                    <p className={styles.sectionSubtitle}>
                        Clubs, Research & Leadership 
                    </p>
                    <h2 className={styles.sectionTitle}>Campus  <span className={styles.gradientText}>Involvement</span></h2>

                    <div className={styles.clubsGrid}>
                        

                        <div className={styles.clubCard}>
                            <div className={styles.clubHeader}>
                                <div className={styles.clubTitleWrapper}>
                                    <h3>Illini Solar Car</h3>
                                    <p className={styles.clubTimeframe}>Aug 2025 - Dec 2025</p>
                                </div>
                                <span className={styles.roleTag}>Strategy & Telemetry Team Member</span>
                            </div>
                            <ul className={styles.clubBullets}>
                                <li>Utilized Python and SQL to analyze 240,000+ of lines of data related to battery voltage, battery power, current, and more related metrics for car information
</li>
                                <li>Analyzed data using Pandas, Polars, and numpy, using Matplotlib to visualize graphs and metrics
</li>
<li>Ran calculations for output voltage, output current, and output power for the 3 MPPTs of the car
</li><li>Parsed eight JSON files to plot voltage vs time graphs for 32 modules of the battery in the car, and worked on excluding outliers to improve models 

</li>
                            </ul>
                        </div>
                        <div className={styles.clubCard}>
                            <div className={styles.clubHeader}>
                                <div className={styles.clubTitleWrapper}>
                                    <h3>LiveSky - NOBE (National Organization of Business & Engineering)</h3>
                                    <p className={styles.clubTimeframe}>Aug 2025 - Dec 2026</p>
                                </div>
                                <span className={styles.roleTag}>Consultant</span>
                            </div>
                            <ul className={styles.clubBullets}>
                                <li>Researched the Drone market in the U.S., including competitors, market growth, and SWOT analysis</li>
                                <li>Brainstormed various proposals for market entry into the U.S., including EMS, Firefighter, and Construction drone</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* Skills & Expertise Section */}
            <section className={styles.skillsSection} ref={skillsRef}>
                <img src={shape041} className={styles.shape6} alt="Decorative shape" />
                <img src={shape064} className={styles.skillsShape2} alt="Decorative shape" />
                <div className={styles.container}>
                    <p className={styles.sectionSubtitle}>
                        Technologies I work with
                    </p>
                    <h2 className={styles.sectionTitle}>Technical <span className={styles.gradientText}>Skills</span></h2>

                    <div className={styles.skillBubbles}>
                        <span className={styles.bubble}>Python</span>
                        <span className={styles.bubble}>Numpy</span>
                        <span className={styles.bubble}>Pandas</span>
                        <span className={styles.bubble}>Pytorch</span>
                        <span className={styles.bubble}>Scikit-learn</span>
                        <span className={styles.bubble}>C++</span>
                        <span className={styles.bubble}>C</span>
                        <span className={styles.bubble}>Java</span>
                        <span className={styles.bubble}>SQL</span>
                        <span className={styles.bubble}>HTML5</span>
                        <span className={styles.bubble}>CSS3</span>
                        <span className={styles.bubble}>JavaScript</span>
                        <span className={styles.bubble}>React</span>
                        <span className={styles.bubble}>TensorFlow</span>
                        <span className={styles.bubble}>Assembly</span>
                        <span className={styles.bubble}>Git</span>
                        <span className={styles.bubble}>GitHub</span>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection} ref={ctaRef}>
                <img src={shape053} className={styles.ctaShape1} alt="Decorative shape" />
                <img src={shape087} className={styles.ctaShape2} alt="Decorative shape" />
                <img src={shape041} className={styles.ctaShape3} alt="Decorative shape" />
                <img src={shape014} className={styles.ctaShape4} alt="Decorative shape" />
                <div className={styles.ctaContainer}>
                    <div className={styles.ctaContent}>
                        <h5 className={styles.ctaLabel}>Lets Get In Contact</h5>
                        <h1 className={styles.ctaTitle}>
                            I'm <span className={styles.italicSpaceMono}>Always Eager</span> To Connect, Learn, And Explore New Ideas
                        </h1>
                        <p className={styles.ctaText}>
                            Whether you have an ambitious project to bring to life or just want to share ideas and collaborate...
                            <br />
                            Send me an <a href="mailto:ygulati2@illinois.edu">Email</a> or connect with me on <a href="https://www.linkedin.com/in/iamyashgulati/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and let's get started!
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
