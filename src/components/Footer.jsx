import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>&copy; {new Date().getFullYear()} Thales. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
