import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Container } from '../../components/ui/Container/Container'
import styles from './NotFound.module.scss'

export function NotFound() {
  const { t } = useTranslation()

  return (
    <div className={styles.root}>
      <Container>
        <h1 className={styles.title}>{t('common.notFoundTitle')}</h1>
        <p className={styles.text}>{t('common.notFoundBody')}</p>
        <Link className={styles.link} to="/">
          {t('common.notFoundHome')}
        </Link>
      </Container>
    </div>
  )
}
