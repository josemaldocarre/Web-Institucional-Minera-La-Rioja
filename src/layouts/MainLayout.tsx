import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import styles from './MainLayout.module.scss'

export function MainLayout() {
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
