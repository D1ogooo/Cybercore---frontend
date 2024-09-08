import { DadosCardItemsType } from '../@types/types'
import { Counter } from './contador'

export function CardItems({ info, preco, image }: DadosCardItemsType) {
 return (
  <>
  <div className='p-5 flex mx-auto items-center'>
   <div className='w-[50%] h-auto pr-2'>
    <img src={image} alt="" className='w-[90%] h-auto'/>
   </div>
   <div className='w-[50%]'>
    <h3 className='text-cinzaClaro h-[6rem]'>{info}</h3>
    <p className='text-cinzaEscuro pt-2'>{preco}</p>
    <Counter />
   </div>
   </div>
  <hr />
  </>
 )
}
