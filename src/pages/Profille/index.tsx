import { useState } from "react";
import { FiCamera } from "react-icons/fi";
import { Eye, Lock } from "lucide-react";
import { api } from "../../service/http";
import { useNavigate } from "react-router-dom";

function Profille() {
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [image, setImage] = useState<File | null>(null);
	const navigate = useNavigate();

	function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0];
		if (file) {
			setImage(file);
		}
	}

	function handleSubmit(e: { preventDefault: () => void }) {
		e.preventDefault();
		const formData = new FormData();
		formData.append("image", image);
		formData.append("password", password);

		if (!image) {
			return alert("Error, imagem não declarada");
		}

		api
			.post("/users/updateImage", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then(() => {
				alert("💡Imagem adicionada com sucesso!");
				navigate("/");
			})
			.catch((e) => {
				alert(e);
			});
	}

	return (
		<div className="flex items-center justify-center my-[10rem]">
			<section className="w-[30%] h-[60vh] flex items-center justify-center rounded-sm">
				<form className=" flex flex-col gap-3 items-center p-2">
					<section className="relative w-[186px] h-[186px] mx-auto mb-8">
						<img
							src="https://github.com/D1ogooo.png"
							alt="Foto do usuário"
							className="w-[186px] h-[186px] rounded-full"
						/>
						<label
							htmlFor="avatar"
							className="w-[38px] h-[38px] bg-gray-500 rounded-full flex items-center justify-center absolute bottom-[7px] right-[7px] cursor-pointer"
						>
							<FiCamera className="w-5 h-5 text-gray-800" />
							<input
								onChange={handleImage}
								id="avatar"
								type="file"
								accept="image/*"
								className="hidden"
							/>
						</label>
					</section>

					<label className="bg-gray-800 flex rounded-sm flex-1 relative p-2 mt-[-20px] min-w-[20rem]">
						<Lock
							className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
							height={19}
						/>
						<input
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							placeholder="Declare sua senha..."
							className="w-full pl-10 border-none bg-transparent outline-none focus:outline-none focus:ring-0"
						/>
						<Eye
							className="text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
							height={21}
						/>
					</label>
					<label className="bg-gray-800 flex rounded-sm flex-1 relative p-2 min-w-[20rem]">
						<Lock
							className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
							height={19}
						/>
						<input
							onChange={(e) => setConfirmPassword(e.target.value)}
							type="password"
							placeholder="Confirme sua senha..."
							className="w-full pl-10 border-none bg-transparent outline-none focus:outline-none focus:ring-0"
						/>
						<Eye
							className="text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
							height={21}
						/>
					</label>
					<button
						disabled={password.length < 1 || confirmPassword.length < 1}
						type="button"
						onClick={handleSubmit}
						className="w-full text-white font-semibold rounded-md h-12 p-2 cursor-pointer bg-purple-600"
					>
						Confirmar
					</button>
				</form>
			</section>
		</div>
	);
}

export { Profille };
