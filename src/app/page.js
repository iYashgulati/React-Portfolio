import styles from './page.module.css'
import Navbar from 'app/components/nav/nav'
import Index from './components/home/index'
import Contact from './components/contact/contact'
import Footer from 'app/components/footer/footer'
import About from './components/about/about'
import Work from './components/work/work'
import Testimonials from './components/testimonials/testimonials'

export default function Home() {
  return (
    
    <body className={styles.main}>
        <Navbar></Navbar>
        <Index></Index>
        <About></About>
        <Work></Work>
        <Testimonials></Testimonials>
        <Contact></Contact>
        <Footer></Footer>
    </body>
  )
}