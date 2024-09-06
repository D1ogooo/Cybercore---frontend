import { BrowserRouter} from 'react-router-dom'
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/useAuth';

export function Router() {
 const { data } = useAuth()
 return (
  <>
   <BrowserRouter>
    {data ? <AppRoutes/> : <AuthRoutes/>}
   </BrowserRouter>
  </>
 )
}