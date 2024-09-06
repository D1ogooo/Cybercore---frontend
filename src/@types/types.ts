import type { ReactNode } from "react";

export interface DataType {
  image: string;
  title: string;
  value: string;
  key: string;
}

export interface DataAuthType {
  data: boolean;
}

export interface ProductType {
  info: DataType;
}

export interface AuthProviderType {
 children: ReactNode;
}

