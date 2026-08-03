import { motion } from 'motion/react'
import { revealVariant, revealViewport } from '../motionVariants.js'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className="section" id="contato">
      <div className={`container ${styles.contact}`}>
        <motion.p
          className="sectionEyebrow"
          variants={revealVariant}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          Contato
        </motion.p>
        <motion.h2
          className="sectionTitle"
          variants={revealVariant}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          Vamos conversar
        </motion.h2>
        <motion.p
          className={styles.lead}
          variants={revealVariant}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          Aberto a oportunidades de estágio, efetivo ou projetos freelance.
        </motion.p>
        <motion.div
          className={styles.links}
          variants={revealVariant}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          {/* PLACEHOLDER: troque pelos seus links reais */}
          <a
            href="https://www.linkedin.com/in/seu-usuario"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/seu-usuario"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:seu-email@exemplo.com" className={styles.link}>
            E-mail
          </a>
        </motion.div>
      </div>
    </section>
  )
}
