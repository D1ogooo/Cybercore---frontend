import { useState, useEffect, useContext, createContext } from "react";
import type { AuthProviderType, AuthData, LoginType, RegisterType, ContextType } from "../@types/types";
import { api } from "../service/http";

const AuthContext = createContext({} as ContextType)

function AuthProvider({ children }: AuthProviderType) {
 const [data, setData] = useState<AuthData>({})

 useEffect(() => {
  const user = localStorage.getItem("@CyberCore:user");
  const token = localStorage.getItem("@CyberCore:token");

  api.defaults.headers.authorization = `Bearer ${token}`;
  setData({ user: JSON.parse(user), token })
 }, [])

 async function session({ email, password }: LoginType) {
  try {
    const res = await api.post('/users/session', { email, password })
    const { user, token } = res.data;

    localStorage.setItem("@CyberCore:user", JSON.stringify(user));
    localStorage.setItem("@CyberCore:token", token);

    api.defaults.headers.authorization = `Bearer ${token}`;
    setData({ user, token })
    window.location.reload()
  } catch(e) {
    console.log(e)
  }
 }

 async function register({ name, email, password }: RegisterType) {
  try {
   const res = await api.post('/users/create', { name, email, password })
  } catch(error) {
   console.log(error)
  }
 }

 async function loggout() {
  localStorage.removeItem("@CyberCore:user");
  localStorage.removeItem("@CyberCore:token");
  api.defaults.headers.authorization = '';
  setData({});
}

 return (
  <AuthContext.Provider value={{ user: data.user, session, register, loggout }}>
   {children}
  </AuthContext.Provider>
 )
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth }