import heartIcon from '/public/images/heart-cheio.png'
import { api } from '../service/http'
import { HeartIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function Favoritar({ key }) {
  async function handleDeleteFavorite (){
   api.post(`/favorites/deleteFavorite/${key}`)
   .then(() => {
    window.location.reload()
   })
   .catch(() => {
    return alert('error')
   })
  }

  return (
   <>
    <div className="flex justify-between items-center">
    <button type='button' onClick={handleDeleteFavorite}>
     <img src={heartIcon} className='cursor-pointer text-red-500' alt=''/>
    </button>
    </div>
   </>
  )
}