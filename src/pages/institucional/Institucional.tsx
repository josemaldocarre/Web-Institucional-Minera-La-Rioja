import { SectionPageLayout } from '../../layouts/SectionPageLayout'
import { INSTITUCIONAL_PAGE } from '../../navigation/sectionNav'
import Autoridades from './Autoridades'
import Contacto from '../contacto/Contacto'
import QuienesSomos from './QuienesSomos'

export default function Institucional() {
  return (
    <SectionPageLayout config={INSTITUCIONAL_PAGE}>
      <QuienesSomos />
      <Autoridades />
      <Contacto />
    </SectionPageLayout>
  )
}
