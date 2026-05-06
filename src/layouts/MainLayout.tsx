import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import styles from './MainLayout.module.scss'

export function MainLayout() {
  return (
    <div className={styles.root}>
      <Header />
      <main id="main-content" className={styles.main} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
