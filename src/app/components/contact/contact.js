const shape014 = '/img/shapes/Shape014.png'
const shape028 = '/img/shapes/Shape028.png'
const shape035 = '/img/shapes/Shape035.png'
const shape041 = '/img/shapes/Shape041.png'
const shape053 = '/img/shapes/Shape053.png'
const shape087 = '/img/shapes/Shape087.png'
import styles from './contact.module.css'


export default function Contact() {
  return (

        <section id={styles.footer}>
            <div className={styles.homeContent}>
          <div className={styles.footerImg}>
            <img src={shape053} id={styles.topRightFoot}></img>
            <img src={shape087} id={styles.midRightFoot}></img>
          </div>

          <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
              <h5>Lets Get In Contact</h5>
              <h1> I'm <span className={styles.italicSpaceMono}> Always Eager</span> To Connect, Learn, And Explore New Ideas</h1>
              <p>
                Whether you have an ambitious project to bring to life or just want to share ideas and collaborate...
                <br></br>
                Send me an <a href={'mailto:ygulati2@illinois.edu'}> Email</a> or connect with me on <a href={'https://www.linkedin.com/in/iamyashgulati/'} target="_blank" rel="noopener noreferrer"> LinkedIn</a> and let's get started!
              </p>
              <div className={styles.contactButtons}>
                <a href="https://raw.githubusercontent.com/iYashgulati/Resume/main/resume.pdf" download="Yash_Gulati_Resume.pdf" className={styles.contactResumeBtn}>
                  <span>Download Resume</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div >
          </div >
          </div>
          </section>

  )
}
