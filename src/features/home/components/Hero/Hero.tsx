import { useId, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '../../../../components/ui/Container/Container'
import type { HomeHeroBlock } from '../../../../services/homeService'
import styles from './Hero.module.scss'

const HERO_VIDEO_SRC = '/videos/hero_720.mp4'
const HERO_POSTER_SRC = '/images/hero/fallback.jpg'
const HERO_LOGO_SRC = '/images/logos/larioja_blanco.svg'

export interface HeroProps {
  readonly hero: HomeHeroBlock
}

export function Hero({ hero }: HeroProps) {
  const { t } = useTranslation()
  const headingId = useId()
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section className={styles.hero} aria-labelledby={headingId}>
      <video
        ref={videoRef}
        className={styles.video}
        autoPlay
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
            <img
              className={styles.titleLogo}
              src={HERO_LOGO_SRC}
              alt={t('layout.logoAlt')}
              width={505}
              height={126}
            />
            <span className={styles.titleAccent}>{t(hero.titleKey)}</span>
          </h1>
          <p className={styles.subtitle}>{t(hero.subtitleKey)}</p>
        </div>
      </Container>
    </section>
  )
}
