import { motion, useReducedMotion } from 'motion/react'
import Button from './Button.jsx'
import TerminalHero from './TerminalHero.jsx'
import styles from './Hero.module.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.content}
          variants={reduceMotion ? undefined : container}
          initial={reduceMotion ? false : 'hidden'}
          animate={reduceMotion ? false : 'show'}
        >
          <motion.p className="sectionEyebrow" variants={item}>
            Backend &amp; IA
          </motion.p>
          <motion.h1 className={styles.title} variants={item}>
            Thales
          </motion.h1>
          <motion.p className={styles.subtitle} variants={item}>
            Desenvolvedor Backend &amp; IA
          </motion.p>
          <motion.p className={styles.lead} variants={item}>
            Construo APIs robustas e produtos com IA aplicada — do backend em Django
            à automação de processos com IA generativa.
          </motion.p>
          <motion.div className={styles.actions} variants={item}>
            <Button href="#projetos" variant="primary">
              Ver projetos
            </Button>
            <Button href="mailto:thacanducas@icloud.com" variant="ghost">
              Entrar em contato
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
        >
          <TerminalHero />
        </motion.div>
      </div>
    </section>
  )
}
