import IncrementIcon from '../../public/images/IncrementIcon.svg'
import DecrementIcon from '../../public/images/DecrementIcon.svg'
import { Trash2 } from 'lucide-react'

export function Favoritar() {
  return (
   <>
    <div className="flex justify-between items-center ">
     <img src={IncrementIcon} alt="" className='cursor-pointer'/>
      <p className='text-baseTitle text-center text-base font-normal leading-[130%]'>0</p>
     <img src={DecrementIcon} alt="" className='cursor-pointer'/>
     <button className='flex p-[0.5rem] justify-center items-center gap-[0.5rem]
      ml-[0.5rem] w-[2.375rem] h-[2.375rem] rounded-[0.375rem] border-none bg-pupleDark cursor-pointer'
     >
     <Trash2 height={22}/>
    </button>
    </div>
   </>
  )
}