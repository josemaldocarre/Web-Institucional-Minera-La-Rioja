import { SectionLayout } from '../../layouts/SectionLayout'
import { gestionMineraService } from '../../services/gestionMineraService'

const { intro } = gestionMineraService.proveedores

export default function Proveedores() {
  return (
    <SectionLayout id="proveedores" title="Proveedores" description={intro}>
      <div>Proveedores</div>
    </SectionLayout>
  )
}
