import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { MAIN_NAV_ITEMS } from './navigation/mainNav'
import CatastroMinero from './pages/gestion-minera/CatastroMinero'
import GestionMinera from './pages/gestion-minera/GestionMinera'
import Proveedores from './pages/gestion-minera/Proveedores'
import Tramites from './pages/gestion-minera/Tramites'
import { Home } from './pages/Home'
import InformacionPublica from './pages/informacion-publica/InformacionPublica'
import Normativas from './pages/informacion-publica/Normativas'
import PlanQuinquenal from './pages/informacion-publica/PlanQuinquenal'
import Transparencia from './pages/informacion-publica/Transparencia'
import Autoridades from './pages/institucional/Autoridades'
import Contacto from './pages/institucional/Contacto'
import Institucional from './pages/institucional/Institucional'
import QuienesSomos from './pages/institucional/QuienesSomos'
import { NotFound } from './pages/NotFound'
import { PlaceholderPage } from './pages/PlaceholderPage'
import Programas from './pages/programas/Programas'
import TallerArtesanias from './pages/programas/TallerArtesanias'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="institucional">
            <Route index element={<Institucional />} />
            <Route path="quienes-somos" element={<QuienesSomos />} />
            <Route path="autoridades" element={<Autoridades />} />
            <Route path="contacto" element={<Contacto />} />
          </Route>

          <Route path="gestion-minera">
            <Route index element={<GestionMinera />} />
            <Route path="tramites" element={<Tramites />} />
            <Route path="catastro-minero" element={<CatastroMinero />} />
            <Route path="proveedores" element={<Proveedores />} />
          </Route>

          <Route path="informacion-publica">
            <Route index element={<InformacionPublica />} />
            <Route path="normativas" element={<Normativas />} />
            <Route path="transparencia" element={<Transparencia />} />
            <Route path="plan-quinquenal" element={<PlanQuinquenal />} />
          </Route>

          <Route path="programas">
            <Route index element={<Programas />} />
            <Route path="taller-artesanias" element={<TallerArtesanias />} />
          </Route>

          {MAIN_NAV_ITEMS.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<PlaceholderPage />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
