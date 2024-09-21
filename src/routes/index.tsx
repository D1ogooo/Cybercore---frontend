import { useAuth } from '../hooks/useAuth';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { useEffect, useState } from 'react';

export function Router() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const checkUser = async () => {
   setLoading(false);
  };

   checkUser();
  }, []);

  if (loading) {
   return
  }

  return (
    <BrowserRouter>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}