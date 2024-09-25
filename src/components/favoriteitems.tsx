import { Favoritar } from './favoritar'
import type { DadosCardItemsType } from '../@types/types'

export function FavoriteItems({ info, preco, image }: DadosCardItemsType) {
 return (
  <>
  <div className='p-5 flex mx-auto items-center'>
   <div className='w-[50%] h-auto pr-2'>
    <img src={image} alt="" className='w-[90%] h-auto'/>
   </div>
   <div className='w-[50%]'>
    <h3 className='text-cinzaClaro '>{info}</h3>
    <div className='flex items-center mt-2 gap-2'>
    <p className='text-cinzaClaro font-medium'>{preco}</p>
    <Favoritar />
    </div>
   </div>
   </div>
  <hr />
  </>
 )
}
