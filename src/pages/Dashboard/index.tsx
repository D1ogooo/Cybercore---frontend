import { Carrosel } from "../../components/carrosel/carrosel"
import { Data } from "../../data/database"
import { Product } from "../../components/modal";

function DashBoard() {
  return (
   <main className="flex flex-col h-20 mx-auto w-[90%]">
    <section className="w-full">
     <Carrosel/>
    </section>
    <h2 className="text-2xl font-extrabold text-gray-700">Mais vendidos</h2>

   <section className="flex items-center w-[100%] gap-2">
    {Data.map((info, index) => (
     <Product index={index} info={info}/>
    ))}
   </section>
   </main>
  )
}

export default DashBoard