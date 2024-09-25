import type { DadosCardItemsType, DataType } from "../@types/types";
import firstImage from "../../public/produtos/1.png";
import secondImage from "../../public/produtos/5.png";
import thirdImage from "../../public/produtos/7.png";
import forImage from "../../public/produtos/10.png";

export const Data: DataType[] = [
	{
		image: `${firstImage}`,
		title:
			"Monitor Gamer SuperFrame Precision, 27 Pol, Curvo, Full HD, 1ms, 240Hz, FreeSync, HDMI/DP, SFP2702G",
		value: "R$ 999,90",
		key: 0,
	},
	{
		image: `${secondImage}`,
		title:
			"Monitor Gamer SuperFrame Vision, 24 Pol, Full HD, IPS, FreeSync, 1ms, 165Hz, HDMI/DP, SFV2409S",
		value: "R$ 799,90",
		key: 1,
	},
	{
		image: `${thirdImage}`,
		title:
			"Monitor Gamer SuperFrame Precision, 23.6 Pol, Curvo, Full HD, 1ms, 180Hz, 99% sRGB, FreeSync, HDMI/DP, SF",
		value: "R$ 699,90",
		key: 2,
	},
	{
		image: `${forImage}`,
		title: "Cadeira Gamer SuperFrame Hybrid, Mesh, Altura Ajustável, Preta",
		value: "R$ 559,89",
		key: 3,
	},
];

export const DataCardItems: DadosCardItemsType[] = [
	{
		id: 0,
		info: "Cadeira Gamer SuperFrame Hybrid, Mesh, Altura Ajustável, Preta",
		preco: "R$ 999,90",
		image: `${secondImage}`,
	},
	{
		id: 1,
		info: "Monitor Gamer SuperFrame Vision, 24 Pol, Full HD, IPS, FreeSync, 1ms, 165Hz, HDMI/DP, SFV2409S",
		preco: "R$ 999,90",
		image: `${secondImage}`,
	},
];
