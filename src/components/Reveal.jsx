import { motion, useReducedMotion } from 'motion/react'

export function Reveal({ children, className = '', delay = 0, amount = 0.2, as = 'div' }) {
  const reduceMotion = useReducedMotion()
  const Component = motion.create(as)

  return (
    <Component
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  )
}
