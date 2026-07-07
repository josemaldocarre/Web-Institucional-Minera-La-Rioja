import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ScrollRestoration } from './components/common/ScrollRestoration/ScrollRestoration'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import Institucional from './pages/institucional/Institucional'
import GestionMinera from './pages/gestion-minera/GestionMinera'
import InformacionPublica from './pages/informacion-publica/InformacionPublica'
import Programas from './pages/programas/Programas'
import Contacto from './pages/contacto/Contacto'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="institucional" element={<Institucional />} />
          <Route path="gestion-minera" element={<GestionMinera />} />
          <Route path="informacion-publica" element={<InformacionPublica />} />
          <Route path="programas" element={<Programas />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
