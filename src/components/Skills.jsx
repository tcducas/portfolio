import { motion } from 'motion/react'
import { skills } from '../data/skills.js'
import { revealVariant, revealViewport } from '../motionVariants.js'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.p
          className="sectionEyebrow"
          variants={revealVariant}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          Skills
        </motion.p>
        <motion.h2
          className="sectionTitle"
          variants={revealVariant}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          Tecnologias &amp; ferramentas
        </motion.h2>
        <motion.ul
          className={styles.grid}
          variants={revealVariant}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          {skills.map((skill) => (
            <li className={styles.pill} key={skill}>
              {skill}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
