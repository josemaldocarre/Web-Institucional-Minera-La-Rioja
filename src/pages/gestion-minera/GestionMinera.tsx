import { SectionPageLayout } from '../../layouts/SectionPageLayout'
import { GESTION_MINERA_PAGE } from '../../navigation/sectionNav'
import CatastroMinero from './CatastroMinero'
import Proveedores from './Proveedores'
import Tramites from './Tramites'

export default function GestionMinera() {
  return (
    <SectionPageLayout config={GESTION_MINERA_PAGE}>
      <Tramites />
      <CatastroMinero />
      <Proveedores />
    </SectionPageLayout>
  )
}
