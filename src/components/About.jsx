import { motion } from 'motion/react'
import { revealVariant, revealViewport } from '../motionVariants.js'
import styles from './About.module.css'

export default function About() {
  return (
    <section className="section" id="sobre">
      <div className="container">
        <motion.p
          className="sectionEyebrow"
          variants={revealVariant}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          Sobre
        </motion.p>
        <motion.h2
          className="sectionTitle"
          variants={revealVariant}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          Trajetória
        </motion.h2>
        <motion.p
          className={styles.text}
          variants={revealVariant}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          Estou no último semestre de Análise e Desenvolvimento de Sistemas (ADS) na ENIAC,
          em São Paulo. Atualmente atuo como estagiário em desenvolvimento backend, trabalhando
          com Python, Django, APIs REST e chatbots com IA generativa para e-commerce.
        </motion.p>
        <motion.p
          className={styles.text}
          variants={revealVariant}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          Meu foco está em análise de dados, IA e automação de processos — com o objetivo de
          crescer no mercado corporativo e, em paralelo, expandir para projetos freelance.
        </motion.p>
      </div>
    </section>
  )
}
