import { Favoritar } from './favoritar'
import type { DadosCardItemsType } from '../@types/types'

export function FavoriteItems({ info, preco, image, key }: DadosCardItemsType) {
 const apiImage = import.meta.env.VITE_REACT_APP_API_LOGIN_URL;
 return (
  <>
  <div className="p-5 flex mx-auto items-center">
   <div className='w-[50%] h-auto pr-2'>
    <img src={`${apiImage}${image}`} alt="" className='w-[90%] h-auto'/>
   </div>
   <div className='w-[50%]'>
    <h3 className='text-cinzaClaro '>{info}</h3>
    <div className='flex items-center mt-2 gap-2'>
    <p className='text-cinzaClaro font-medium'>{preco}</p>
    <Favoritar productId={key}/>
    </div>
   </div>
   </div>
  <hr />
  </>
 )
}
