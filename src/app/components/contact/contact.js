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
            <div class={styles.dotted}></div>
            <div class={styles.homeContent}>
          <div className={styles.footerImg}>
            <img src={shape053} id={styles.topRightFoot}></img>
            <img src={shape087} id={styles.midRightFoot}></img>
          </div>

          <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
              <h5>Lets Get In Contact</h5>
              <h1> My Inbox Is <span className={styles.italicSpaceMono}> Always Open</span> For Freelance Opportuanities</h1>
              <p> Have an exciting project that you want to embark on? <br></br> Send me an <a href={'mailto:i.yashgulati@gmail.com'}> email</a> or message me on <a href={'https://</p>www.fiverr.com/yash2007'}> fiverr</a> and let's get started!</p>
            </div >
          </div >
          </div>
          </section>

  )
}
