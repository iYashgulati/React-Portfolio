import styles from './index.module.css'
const shape014 = '/img/shapes/shape014.png'
const shape064 = '/img/shapes/shape064.png'
const Shape107 = '/img/shapes/shape107.png'

export default function Index() {
    return (
        <section id={styles.btsHome}>
            <div id="img">
                <img src={shape014} class={styles.homepageImg1}></img>
                <img src={Shape107} class={styles.homepageImg2}></img>
                <img src={shape064} class={styles.homepageImg3}></img>
            </div>
            <div class={styles.dotted}></div>
            <div class={styles.homeContent}>
                <div class={styles.homeLeft}>
                    <h1>Hello — I'm Yash.<br></br>
                        An Indonesia-based developer.</h1>

                    <h2>I specialize in creating unparalleled digital experiences - exquisite, bespoke websites that seamlessly blend artistry & functionality.</h2>
                </div>
                <div class={styles.homeRight}>

                </div>
            </div>
        </section>

    );
}
