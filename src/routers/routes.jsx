import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Estadisticas } from '../pages/Estadisticas'
import { Productos } from '../pages/Productos'

export const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/estadisticas' element={<Estadisticas />} />
      </Routes>
    </BrowserRouter>
  )
}
