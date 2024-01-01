import styles from './work.module.css'
const shape014 = '/img/shapes/Shape014.png'
const shape028 = '/img/shapes/Shape028.png'
const shape035 = '/img/shapes/Shape035.png'
const shape041 = '/img/shapes/Shape041.png'
const shape053 = '/img/shapes/Shape053.png'
const shape087 = '/img/shapes/Shape087.png'


export default function Home() {
    return (

            <div class={styles.homeContent}>
            <img src={shape041} className={styles.shape041}></img>
            <img src={shape087} className={styles.shape087}></img>
            <div class={styles.dotted}></div>
                <div className={styles.workContent}>
                <h3>What I've Been Up To</h3>
                    <h1> My Featured Creations</h1>
                    <div className={styles.cardsContainer}>
                        <div className={styles.workCard}>
                            <div className={styles.workCardLeft} id={styles.workOne}>
                            </div>
                            <div className={styles.workCardRight}>
                                <h3>Featured Project</h3>
                                <h2>Jambox Games</h2>
                                <p>Jambox Games is an upcoming gaming company looking to enable multiplayer technology in hypercasual games for developers in SEA.</p>
                            </div>

                            <div className={styles.workCardImg}>
                                <img src={shape014} alt=""></img>
                            </div>
                        </div>
                        <div className={styles.workCard} id={styles.cardTwo}>
                            <div className={styles.workCardRight} id={styles.rightV2}>
                                <h3>Featured Project</h3>
                                <h2>Tiger Princess NFT</h2>
                                <p>Tiger Princess Club is a new NFT club. Their aim is to provide amazing party benefits for holders of the new NFT.</p>
                            </div>
                            <div className={styles.workCardLeft} id={styles.workTwo}>
                            </div>
                            <div className={styles.workCardImgTwo}>
                                <img src={shape028} alt=""></img>
                            </div>
                        </div>
                        <div className={styles.workCard} id={styles.cardThree}>
                            <div className={styles.workCardLeft} id={styles.workThree}>
                            </div>
                            <div className={styles.workCardRight}>
                                <h3>Featured Project</h3>
                                <h2>Terminal Charging</h2>
                                <p>Terminal Charging is a startup looking to simplify electric vehicle charging. Their aim is to make it more accessible and cheaper for the average consumer.</p>
                            </div>
                            <div className={styles.workCardImg}>
                                <img src={shape041} alt=""></img>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    )
}

