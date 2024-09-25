import {
  Menu,
  MenuButton,
  MenuList,

} from '@chakra-ui/react'
import { ShoppingBasket, Trash2 } from 'lucide-react'
import type { CartWidgetType } from '../@types/types'
import { DataCardItems } from '../data/database'
import { CardItems } from './carditems'

export function CartWidget({ width = 2, height = 2, ...rest}: CartWidgetType) {
  return (
  <>
  <Menu>
   <MenuButton
    px={4}
    py={2}
    transition='all 0.2s'
    borderRadius='md'
   >
   <ShoppingBasket color={"#fff"} {...rest} width={width} height={height}/>
    </MenuButton>
     <MenuList className='w-[28rem]'>
     {DataCardItems.map((data) => (

      <CardItems
       key={data.id} id={data.id} info={data.info}
       preco={data.preco} image={data.image}
      />

      ))}
      {/* <MenuDivider /> */}
      {/* <MenuItem color={'#27272A'} className='flex gap-2 mb-1 mt-1'>
       <Trash2/>
      </MenuItem> */}
     <div className='flex items-center justify-between pl-4 pr-4 pb-1 pt-4'>
      <button type="button" className='font-bold text-cinzaClaro flex gap-1'>
       <Trash2/>
       Esvaziar carrinho
      </button>
      <button type="button" className='font-bold text-cinzaClaro flex'>
       Realizar compra
      </button>
      </div>
     </MenuList>
    </Menu>
   </>
  )
}