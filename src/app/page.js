import styles from './page.module.css'
import Navbar from 'app/components/nav/nav'
import Index from './components/home/index'
import Contact from './components/contact/contact'
import Footer from 'app/components/footer/footer'
import About from './components/about/about'
import Work from './components/work/work'

export default function Home() {
  return (
    <main className={styles.main}>
        <Navbar />
        <Index />
        <About />
        <Work />
        <Contact />
        <Footer showDots={true} />
    </main>
  )
}