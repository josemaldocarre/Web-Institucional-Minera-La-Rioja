import type { ReactNode } from 'react'
import { useInView } from '../../../hooks/useInView'
import styles from './MotionReveal.module.scss'

interface MotionRevealProps {
  children: ReactNode
}

export function MotionReveal({ children }: MotionRevealProps) {
  const { ref, isVisible } = useInView()

  return (
    <div ref={ref} className={isVisible ? `${styles.root} ${styles.visible}` : styles.root}>
      {children}
    </div>
  )
}
