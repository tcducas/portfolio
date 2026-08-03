import { useState } from 'react'
import Button from './Button.jsx'
import styles from './Navbar.module.css'

const LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#skills', label: 'Skills' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo}>
          Thales<span className="accent">.</span>
        </a>

        <nav className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <Button href="#contato" variant="primary" size="sm" className={styles.cta}>
          Contato
        </Button>

        <button
          type="button"
          className={styles.toggle}
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
