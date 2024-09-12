import { useContext, useState, createContext } from "react";
import type { AuthProviderType, DataAuthType } from "../@types/types";

const AuthContext = createContext({})

function AuthProvider({ children }: AuthProviderType) {
 const [data, setdata] = useState<DataAuthType | undefined>(undefined)
 return (
  <AuthContext.Provider value={{ data: false }}>
   {children}
  </AuthContext.Provider>
 )
}

function useAuth() {
 const context = useContext(AuthContext)
 return context
}

export { AuthProvider, useAuth }