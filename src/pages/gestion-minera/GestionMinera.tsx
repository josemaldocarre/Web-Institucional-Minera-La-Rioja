import { Container } from '../../components/ui/Container/Container'
import { PageHero } from '../../components/ui/PageHero/PageHero'
import { SectionNavTabs } from '../../components/ui/SectionNavTabs/SectionNavTabs'
import { gestionMineraService } from '../../services/gestionMineraService'
import Proveedores from './Proveedores'
import Tramites from './Tramites'
import styles from './GestionMinera.module.scss'

const { page, tramites, proveedores } = gestionMineraService

const sectionNavItems = [
  { id: 'tramites', label: tramites.title },
  { id: 'proveedores', label: proveedores.title },
] as const

export default function GestionMinera() {
  return (
    <>
      <PageHero {...page} />

      <div className={styles.navBar}>
        <Container>
          <SectionNavTabs
            items={sectionNavItems}
            ariaLabel="Secciones de la página de gestión minera"
          />
        </Container>
      </div>

      <Tramites />
      <Proveedores />
    </>
  )
}
