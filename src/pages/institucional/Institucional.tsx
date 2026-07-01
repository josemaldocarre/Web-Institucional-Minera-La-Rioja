import { Container } from '../../components/ui/Container/Container'
import { PageHero } from '../../components/ui/PageHero/PageHero'
import { SectionNavTabs } from '../../components/ui/SectionNavTabs/SectionNavTabs'
import { institucionalService } from '../../services/institucionalService'
import Autoridades from './Autoridades'
import QuienesSomos from './QuienesSomos'
import styles from './Institucional.module.scss'

const { page, quienesSomos, autoridades } = institucionalService

const sectionNavItems = [
  { id: 'quienes-somos', label: quienesSomos.title },
  { id: 'autoridades', label: autoridades.title },
] as const

export default function Institucional() {
  return (
    <>
      <PageHero {...page} />

      <div className={styles.navBar}>
        <Container>
          <SectionNavTabs
            items={sectionNavItems}
            ariaLabel="Secciones de la página institucional"
          />
        </Container>
      </div>

      <QuienesSomos />
      <Autoridades />
    </>
  )
}
