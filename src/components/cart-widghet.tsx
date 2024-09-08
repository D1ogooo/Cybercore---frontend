import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react'
import { ShoppingCart, Trash2 } from 'lucide-react'
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
   <ShoppingCart {...rest} width={width} height={height}/>
    </MenuButton>
     <MenuList className='w-[28rem]'>
     {DataCardItems.map((data) => (
     <div className=''>
      <CardItems
       key={data.id} id={data.id} info={data.info}
       preco={data.preco} image={data.image}
      />
     </div>
      ))}
      {/* <MenuDivider /> */}
      <MenuItem color={'#27272A'} className='flex gap-2 mb-1 mt-1'>
       <Trash2/>
       <p className='font-bold text-cinzaClaro'>Esvaziar carrinho</p>
      </MenuItem>
     </MenuList>
    </Menu>
   </>
  )
}