import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Cart } from '../pages/Cart'
import { DashBoard } from '../pages/Dashboard'
import { Pagina_404 } from '../pages/NotFoundPage'
import { Profille } from '../pages/Profille'
import { CreateProduct } from '../pages/CreateProduct'

export function AppRoutes() {
 return (
  <>
   <Routes>
    <Route path='/' element={<DefaultLayout/>}>
     <Route path='/' element={<DashBoard/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/profille' element={<Profille/>}/>
     <Route path='/createProduct' element={<CreateProduct/>}/>
    </Route>
    <Route path="*" element={<Pagina_404/>}/>
   </Routes>
  </>
 )
}