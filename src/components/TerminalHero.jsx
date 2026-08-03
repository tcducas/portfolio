import { useReducedMotion } from 'motion/react'
import { useTypewriter } from '../hooks/useTypewriter.js'
import { terminalLines, cvUrl } from '../data/resume.js'
import Button from './Button.jsx'
import styles from './TerminalHero.module.css'

export default function TerminalHero() {
  const reduceMotion = useReducedMotion()
  const { completedLines, promptText, outputText, done } = useTypewriter(terminalLines, {
    skip: reduceMotion,
  })

  return (
    <div className={styles.window}>
      <div className={styles.header}>
        <span className={`${styles.dot} ${styles.dotRed}`} />
        <span className={`${styles.dot} ${styles.dotYellow}`} />
        <span className={`${styles.dot} ${styles.dotGreen}`} />
      </div>

      <div className={styles.body}>
        {completedLines.map((line, i) => (
          <div className={styles.line} key={i}>
            <span className={styles.prompt}>$ {line.prompt}</span>
            {line.output && <span className={styles.output}>{line.output}</span>}
          </div>
        ))}

        {!done && (
          <div className={styles.line}>
            <span className={styles.prompt}>
              $ {promptText}
              {!outputText && <span className={styles.cursor} />}
            </span>
            {outputText && (
              <span className={styles.output}>
                {outputText}
                <span className={styles.cursor} />
              </span>
            )}
          </div>
        )}

        {done && (
          <div className={styles.downloadRow}>
            <Button href={cvUrl} download variant="ghost" size="sm">
              ↓ Baixar CV
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
