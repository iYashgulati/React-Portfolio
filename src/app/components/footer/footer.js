import styles from './footer.module.css'


export default function Contact({ showDots = false }) {
    return (
        <footer className={`${styles.actFooter} ${showDots ? styles.withDots : ''}`}>
            <p>&copy; 2026 Yash Gulati</p>
        </footer>

    )
}
