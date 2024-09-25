import type { ReactNode } from "react";

export interface DataType {
  imagem: string;
  sobre: string;
  preco: string;
  key: string;
}

export interface AuthData {
  user?: {
    id: string;
    name: string;
  };
  token?: string;
}

export interface ContextType extends Pick<AuthData, 'user'> {
  loggout: () => void;
  session: (data: LoginType) => Promise<void>;
  register: (data: RegisterType) => Promise<void>;
  cargo: "usuario" | "admin";
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

export interface DeleteItemType {
  id: string;
}

export interface RegisterType {
  name: string;
  email: string;
  password: string;
}

export interface DecodedTokenType {
  role: "usuario" | "admin";
}