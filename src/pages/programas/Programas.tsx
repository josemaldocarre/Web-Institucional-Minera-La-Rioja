import { PageHero } from '../../components/ui/PageHero/PageHero'
import { programasService } from '../../services/programasService'
import TallerArtesanias from './TallerArtesanias'

const { page } = programasService

export default function Programas() {
  return (
    <>
      <PageHero {...page} />
      <TallerArtesanias />
    </>
  )
}
