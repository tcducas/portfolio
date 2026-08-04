import { motion } from 'motion/react'
import { revealVariant, revealViewport } from '../motionVariants.js'
import styles from './About.module.css'

export default function About() {
  return (
    <section className="section" id="sobre">
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.photoWrap}
          variants={revealVariant}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/thales.jpg`}
            alt="Thales"
            className={styles.photo}
          />
        </motion.div>

        <div>
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
            em São Paulo. Atualmente atuo como estagiário em desenvolvimento backend, construindo
            APIs REST com Python e Django e participando de projetos de automação e inovação
            tecnológica.
          </motion.p>
          <motion.p
            className={styles.text}
            variants={revealVariant}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
          >
            No dia a dia, isso significa modelar APIs com Django REST Framework, estruturar
            autenticação e integrações, e persistir dados em PostgreSQL — muitas vezes com
            Docker Compose pra manter o ambiente reproduzível e testes automatizados com Pytest.
            Do lado de IA, trabalho com prompt engineering e desenvolvimento de chatbots
            inteligentes, incluindo um projetado para navegação em e-commerce.
          </motion.p>
          <motion.p
            className={styles.text}
            variants={revealVariant}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
          >
            Meu foco está em análise de dados, IA e automação de processos — inclusive na forma
            como eu mesmo trabalho, estruturando skills e pipelines próprios pra acelerar do
            briefing ao código. O objetivo é crescer no mercado corporativo e, em paralelo,
            expandir para projetos freelance.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
