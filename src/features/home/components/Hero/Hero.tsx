import { useId } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Hero.module.scss'

const HERO_VIDEO_SRC = '/videos/hero.mp4'
const HERO_POSTER_SRC = '/images/hero/fallback.jpg'

export interface HeroProps {
  readonly titleKey: string
  readonly subtitleKey: string
}

export function Hero({ titleKey, subtitleKey }: HeroProps) {
  const { t } = useTranslation()
  const headingId = useId()

  return (
    <section className={styles.hero} aria-labelledby={headingId}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={HERO_POSTER_SRC}
        aria-hidden="true"
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <h1 id={headingId} className={styles.title}>
          <span className={styles.titleLight}>La Rioja, </span>
          <span className={styles.titleAccent}>{t(titleKey)}</span>
        </h1>
        <p className={styles.subtitle}>{t(subtitleKey)}</p>
      </div>
    </section>
  )
}
