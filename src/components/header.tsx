import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { CartWidget } from "../components/cart-widghet";
import { Favorite } from "../components/favorite-widghet";
import { Search } from 'lucide-react'

export function Header() {
  const { loggout } = useAuth()

  return (
   <div className="flex items-center justify-evenly color my-5 w-[90%] h-auto mx-auto">

     <Link to='/' className="text-2xl font-extrabold text-gray-700">
      cybercore
     </Link>

     <form className="flex w-[50%] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
      <Search className="w-5 h-5 text-zinc-500"/>
      <input placeholder="Buscar produtos..." className="flex-1 bg-transparent text-sm outline-0 text-zinc-500 border-none " />
     </form>

    <div className="flex items-center gap-4 text-white">

     <Link to='/' className="flex items-center gap-2 hover:underline">
      <img src="https://github.com/D1ogooo.png" className="h-10 w-10 rounded-full" width={54} height={54} alt=""/>
      {/* https://via.placeholder.com/54?text=Olá */}
     </Link>
     {/* <span className="text-sm">Entre ou <br></br><Link to='/signup'>Cadastre-se</Link></span> */}
     <p className="text-sm">Bem vindo <br></br><span className="text-roxo">Diogo</span></p>

     <div className="w-px h-4 bg-zinc-400"/>
     <section className="flex items-center">
      <CartWidget width={30} height={30}/>
      <Favorite width={30} height={30}/>
      {/* <LucideHeart width={30} height={30}/> */}
     </section>
    </div>
     <button className="text-red-500 font-medium" onClick={() => loggout()}>Sair</button>
   </div>
  )
}