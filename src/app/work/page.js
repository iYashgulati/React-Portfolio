import styles from './page.module.css'
import Navbar from '/Users/69830/Downloads/Personal/react-portfolio/portfolio/src/app/components/nav/nav'
import Jambox from './projects/jambox-games/jamboxSection'
import Cosmonats from './projects/cosmonats/cosmonatsSection'
import TPC from './projects/tiger-princess-club/tpcSection'
import TC from './projects/terminal-charging/tcSection'
import Octavo from './projects/octavo-press/opSection'
import Taeger from './projects/taeger-art/taSection'
import Footer from '/Users/69830/Downloads/Personal/react-portfolio/portfolio/src/app/components/footer/footer'


export default function Home() {
  return (
    
    <body className={styles.main}>
          <div class={styles.homeContent}>
          <div class={styles.dotted}></div>
        <Navbar></Navbar>  
        <Jambox></Jambox>
        <Cosmonats></Cosmonats>
        <TPC></TPC>
        <TC></TC>
        <Octavo></Octavo>
        <Taeger></Taeger>
        <br></br>
        <br></br>
        <Footer></Footer>
        </div>
    </body>
  )
}
