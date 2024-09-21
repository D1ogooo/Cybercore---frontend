import type { ReactNode } from "react";

export interface DataType {
  image: string;
  title: string;
  value: string;
  key: number;
}

export interface AuthData {
  user?: {
   id: string;
   name: string;
  } 
  token?: string;
}

export interface ContextType extends Pick<AuthData,'user'> {
 loggout: () => void;
 session: (email: string, password: string) => Promise<void>
}

export interface ProductType {
  info: DataType;
}

export interface AuthProviderType {
  children: ReactNode;
}

export interface CartWidgetType { 
  width?: number;
  height?: number;
}

export interface DadosCardItemsType {
  id: number;
  info: string;
  preco: string;
  image: string;
}

export interface LoginType {
  email: string;
  password: string;
}

export interface RegisterType {
  name: string;
  email: string;
  password: string;
}