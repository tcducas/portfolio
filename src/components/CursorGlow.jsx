import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react'
import styles from './CursorGlow.module.css'

export default function CursorGlow() {
  const reduceMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-9999)
  const y = useMotionValue(-9999)
  const springX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 })

  useEffect(() => {
    if (reduceMotion || !window.matchMedia('(pointer: fine)').matches) return

    setEnabled(true)
    function handleMove(event) {
      x.set(event.clientX)
      y.set(event.clientY)
    }
    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [reduceMotion, x, y])

  if (reduceMotion || !enabled) return null

  return <motion.div className={styles.glow} style={{ left: springX, top: springY }} />
}
