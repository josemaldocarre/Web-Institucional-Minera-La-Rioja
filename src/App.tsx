import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { MAIN_NAV_ITEMS } from './navigation/mainNav'
import { Home } from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          {MAIN_NAV_ITEMS.map((item) => (
            <Route
              key={item.path}
              path={item.path}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
