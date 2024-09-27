import { useEffect, useState } from "react";
import type { ProductDetailtype } from "../../@types/types";
import { Counter } from "../../components/contador";
import { api } from "../../service/http";
import { useParams } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

function ProductDetail() {
	const [data, setData] = useState<ProductDetailtype>({});
	const [loading, setLoading] = useState<boolean>(true);
	const { id } = useParams();
	const apiImage = import.meta.env.VITE_REACT_APP_API_LOGIN_URL;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await api.get(`/products/product/${id}`);
				setData(res.data);
			} catch (e) {
				console.error("Erro de rede: ", e.message);
				console.error("Detalhes do erro:", e);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [id]);

	if (loading) {
		return (
			<div className="flex items-center justify-center h-screen">
				<Spinner size="xl" />
			</div>
		);
	}

	return (
		<div className="flex items-center justify-center overflow-x-auto mt-[10rem]">
			<div className="flex justify-center items-center space-x-8 h-[25rem] rounded-md p-6">
				<section className="flex justify-center items-center p-[2rem]">
					<img
						src={`${apiImage}${data.imagem}`}
						alt={data.sobre || "Produto"}
						className="object-contain w-[15rem] h-[15rem]"
					/>
				</section>
				<section className="flex flex-col justify-center w-full h-auto">
					<div className="w-[20rem] mb-2">
						<h3 className="text-cinzaClaro text-left font-medium">
							{data.sobre}
						</h3>
						<p className="text-cinzaEscuro w-full mx-auto">{data.preco}</p>
					</div>
					<Counter />
				</section>
			</div>
		</div>
	);
}

export { ProductDetail };
