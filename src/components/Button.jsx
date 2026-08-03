import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react'
import styles from './Button.module.css'

let rippleId = 0

export default function Button({
  as = 'a',
  variant = 'primary',
  size,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [ripples, setRipples] = useState([])
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.3 })
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.3 })

  function handlePointerMove(event) {
    if (reduceMotion || event.pointerType !== 'mouse' || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.25)
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.25)
  }

  function handlePointerLeave() {
    x.set(0)
    y.set(0)
  }

  function handlePointerDown(event) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const id = rippleId++
    setRipples((prev) => [
      ...prev,
      {
        id,
        size,
        left: event.clientX - rect.left - size / 2,
        top: event.clientY - rect.top - size / 2,
      },
    ])
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 500)
  }

  const MotionTag = as === 'button' ? motion.button : motion.a
  const classes = [styles.btn, styles[variant], size && styles[size], className]
    .filter(Boolean)
    .join(' ')

  return (
    <MotionTag
      ref={ref}
      className={classes}
      style={reduceMotion ? undefined : { x: springX, y: springY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      {...rest}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className={styles.ripple}
          style={{ width: r.size, height: r.size, left: r.left, top: r.top }}
        />
      ))}
    </MotionTag>
  )
}
