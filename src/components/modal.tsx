import { useAuth } from "../hooks/useAuth"
import { Pencil, ShoppingBasket } from "lucide-react"
import type { ProductType } from "../@types/types"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"

export function Product({ info }: ProductType) {
  const { cargo } = useAuth()
  const apiImage = import.meta.env.VITE_REACT_APP_API_LOGIN_URL;

  return (
   <div className="pr-[-1.25rem] pl-[1.25rem]">
    <Link to={`/productDetail/${info.id}`}
     className="flex  flex-col h-auto w-[17rem] gap-[.5rem]
   border-hrColor p-0 mt-5 cursor-pointer" 
    >
    <button type='button' className="z-50" onClick={(e) => e.stopPropagation()}>
     {cargo === "usuario" ?
      <ShoppingBasket height={32} width={32} className="cursor-pointer bg-hrColor p-[.3125rem] rounded-[.9375rem]" color="#fff"/>
       :
       <Pencil height={32} width={32} color={'#dfdeded1'}/>
     }
    </button>
    <img src={`${apiImage}${info.imagem}`} alt={info.sobre} className="flex w-[9.5rem] h-[9.5rem] justify-center items-center mx-auto flex-shrink-0"/>
     <h3 className="text-cinzaClaro text-left font-medium">{info.sobre}</h3>
     <p className="text-cinzaEscuro w-full mx-auto">{info.preco}</p>
    </Link>
  </div>
 )
}