import type { ReactNode } from "react";

export interface DataType {
	imagem: string;
	sobre: string;
	preco: string;
	id: string;
}

export interface HandleSubmitId {
	productId: string;
	id: string;
}
export interface AuthData {
	user?: {
		id: string;
		name: string;
	};
	token?: string;
}

export interface ContextType extends Pick<AuthData, "user"> {
	loggout: () => void;
	session: (data: LoginType) => Promise<void>;
	register: (data: RegisterType) => Promise<void>;
	cargo: "usuario" | "admin";
}

export interface ProductType {
	info: DataType;
	productId: string;
}

export interface ProductDetailtype {
	imagem: string;
	sobre: string;
	preco: string;
}

export interface AuthProviderType {
	children: ReactNode;
}

export interface FavoriteProviderType {
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
	key: string;
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
