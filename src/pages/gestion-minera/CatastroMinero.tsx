import { SectionLayout } from '../../layouts/SectionLayout'
import { gestionMineraService } from '../../services/gestionMineraService'

const { intro } = gestionMineraService.catastroMinero

export default function CatastroMinero() {
  return (
    <SectionLayout id="catastro-minero" title="Catastro Minero" description={intro}>
      <div>CatastroMinero</div>
    </SectionLayout>
  )
}
