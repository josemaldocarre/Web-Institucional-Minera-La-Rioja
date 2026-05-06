import { useId, useRef, useState, type CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '../../../../components/ui/Container/Container'
import styles from './Hero.module.scss'

const HERO_VIDEO_SRC = '/videos/hero_720.mp4'
const HERO_POSTER_SRC = '/images/hero/fallback.jpg'

const soundBtnStyle: CSSProperties = {
  position: 'absolute',
  bottom: '2rem',
  right: '2rem',
  zIndex: 4,
  padding: '0.45rem 0.6rem',
  fontSize: '1.125rem',
  lineHeight: 1,
  border: '1px solid rgba(255, 255, 255, 0.35)',
  borderRadius: '999px',
  background: 'rgba(0, 0, 0, 0.35)',
  cursor: 'pointer',
  color: '#fff',
}

export interface HeroProps {
  readonly titleKey: string
  readonly subtitleKey: string
}

export function Hero({ titleKey, subtitleKey }: HeroProps) {
  const { t } = useTranslation()
  const headingId = useId()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleSound = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }

  return (
    <section className={styles.hero} aria-labelledby={headingId}>
      <video
        ref={videoRef}
        className={styles.video}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        poster={HERO_POSTER_SRC}
        aria-hidden="true"
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
      <div className={styles.overlay} aria-hidden="true" />
      <Container>
        <div className={styles.content}>
          <h1 id={headingId} className={styles.title}>
            <span className={styles.titleLight}>La Rioja, </span>
            <span className={styles.titleAccent}>{t(titleKey)}</span>
          </h1>
          <p className={styles.subtitle}>{t(subtitleKey)}</p>
        </div>
      </Container>
      <button
        type="button"
        style={soundBtnStyle}
        onClick={toggleSound}
        aria-label={isMuted ? 'Activar sonido del video' : 'Silenciar video'}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>
    </section>
  )
}
