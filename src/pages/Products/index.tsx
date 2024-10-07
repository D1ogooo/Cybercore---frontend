import { useEffect, useState } from "react";
import type { ProductDetailtype } from "../../@types/types";
import { Counter } from "../../components/contador";
import { api } from "../../service/http";
import { useParams } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { Trash2 } from "lucide-react";

function ProductDetail() {
	const [data, setData] = useState<ProductDetailtype>({});
	const [loading, setLoading] = useState<boolean>(true);
	const apiImage = import.meta.env.VITE_REACT_APP_API_LOGIN_URL;
	const { id } = useParams();

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

  // function handleDeleteProduct ({ id }: { id: string }) {
	// 	api.post(`/products/delete/${id}`)
	// 	.then(() => {
	// 	 window.location.reload()
	// 	})
	// 	.catch(() => {
	// 	 return alert('error')
	// 	})
	// }

	if (loading) {
		return (
			<div className="flex items-center justify-center h-screen">
				<Spinner size="xl" />
			</div>
		);
	}

	return (
		<div className="flex items-center justify-center overflow-x-auto mt-[10rem]">
			<div className="flex justify-center items-center space-x-8 h-[30rem] rounded-md p-6">
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
				</section>
					<button
					// onClick={handleDeleteProduct}
					type="button"
					className="flex p-[0.5rem] justify-center items-center gap-[0.5rem]
      ml-[0.5rem] w-[2.375rem] h-[2.375rem] rounded-[0.375rem] border-none bg-pupleDark cursor-pointer"
				>
					<Trash2 height={22}/>
				</button>
			</div>
		</div>
	);
}

export { ProductDetail };
