import heartIcon from '/public/images/heart-cheio.png';
import { api } from '../service/http';

export function Favoritar({ productId }: { productId: string }) {
  async function handleDeleteFavorite(id: string) {
    try {
      await api.post(`/favorites/deleteFavorite/${id}`);
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="flex justify-between items-center">
      <button type='button' onClick={() => handleDeleteFavorite(productId)}>
        <img src={heartIcon} className='cursor-pointer text-red-500' alt='' />
      </button>
    </div>
  );
}
