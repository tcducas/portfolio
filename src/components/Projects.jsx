import { motion } from 'motion/react'
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import { revealVariant, revealViewport } from '../motionVariants.js'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section className="section" id="projetos">
      <div className="container">
        <motion.p
          className="sectionEyebrow"
          variants={revealVariant}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          Projetos
        </motion.p>
        <motion.h2
          className="sectionTitle"
          variants={revealVariant}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          Projetos em destaque
        </motion.h2>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
