import { useId, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Button from './Button.jsx'
import { revealVariant, revealViewport } from '../motionVariants.js'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)
  const detailId = useId()

  return (
    <motion.article
      className={styles.card}
      variants={revealVariant}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      layout
    >
      <div className={styles.body}>
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={expanded}
          aria-controls={detailId}
          onClick={() => setExpanded((v) => !v)}
        >
          <h3 className={styles.title}>{project.title}</h3>
          <motion.span
            className={styles.chevron}
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            aria-hidden="true"
          >
            ⌄
          </motion.span>
        </button>

        <p className={styles.desc}>{project.shortDesc}</p>

        <ul className={styles.tagList}>
          {project.tags.map((tag) => (
            <li className={styles.tag} key={tag}>
              {tag}
            </li>
          ))}
        </ul>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={detailId}
              className={styles.detailWrapper}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className={styles.detail}>
                <p className={styles.longDesc}>{project.longDesc}</p>
                <ul className={styles.highlights}>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                {project.screenshots.length === 0 && (
                  <div className={styles.screenshotPlaceholder}>Capturas de tela em breve</div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {project.repoUrl && (
        <div className={styles.footer}>
          <Button href={project.repoUrl} variant="outline" size="sm" target="_blank" rel="noopener noreferrer">
            Ver no GitHub
          </Button>
        </div>
      )}
    </motion.article>
  )
}
