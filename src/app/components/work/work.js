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
                                <p>Jambox Games, the rising star in the gaming industry, aims to empower Southeast Asian developers by bringing multiplayer technology to the world of hypercasual games. </p>
                            </div>

                            <div className={styles.workCardImg}>
                                <img src={shape014} alt=""></img>
                            </div>
                        </div>
                        <div className={styles.workCard} id={styles.cardTwo}>
                            <div className={styles.workCardRight} id={styles.rightV2}>
                                <h3>Featured Project</h3>
                                <h2>Tiger Princess NFT</h2>
                                <p>Join the latest NFT sensation! Unlock exclusive party perks for holders of cutting-edge, woman empowered NFTs. </p>
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
                                <p>Terminal Charging, a pioneering startup, is on a mission to streamline the electric vehicle charging experience, making it more affordable and accessible for everyday consumers. </p>
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

