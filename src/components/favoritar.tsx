import { Heart } from 'lucide-react'
import { api } from '../service/http'

export function Favoritar() {
  function handleFavorite (){
   api.post('/')
  }

  return (
   <>
    <div className="flex justify-between items-center">
    <button type='button' onClick={handleFavorite}>
     <Heart className='cursor-pointer'/>
    </button>
    </div>
   </>
  )
}