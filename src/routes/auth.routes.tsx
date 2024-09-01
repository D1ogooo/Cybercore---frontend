import { Routes, Route } from 'react-router-dom'
import SignIn from '../pages/Auth/SignIn'
import SignUp from '../pages/Auth/SignUp'
import Pagina_404 from '../pages/NotFoundPage'

export function AuthRoutes() {
 return (
  <>
   <Routes>
    <Route path='/' element={<SignIn/>}/>
     <Route path='/signup' element={<SignUp/>}/>
    <Route path="*" element={<Pagina_404/>}/>
   </Routes>
  </>
 )
}