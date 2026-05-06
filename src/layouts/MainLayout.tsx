import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import styles from './MainLayout.module.scss'

export function MainLayout() {
  const location = useLocation()

  return (
    <div className={styles.root}>
      <Header key={location.pathname} />
      <main id="main-content" className={styles.main} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
