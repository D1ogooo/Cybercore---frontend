import {
  Menu,
  MenuButton,
  MenuList,
} from '@chakra-ui/react'
import { LucideHeart } from 'lucide-react'
import type { CartWidgetType } from '../@types/types'
import { DataCardItems } from '../data/database'
import { FavoriteItems } from './favoriteitems'

export function Favorite({ width = 2, height = 2, ...rest}: CartWidgetType) {
  return (
  <>
  <Menu>
   <MenuButton
    px={4}
    py={2}
    transition='all 0.2s'
    borderRadius='md'
   >
   <LucideHeart {...rest} width={width} height={height} />
    </MenuButton>
     <MenuList className='w-[28rem]'>
     {DataCardItems.map((data) => (
      <FavoriteItems
       key={data.id} id={data.id} info={data.info}
       preco={data.preco} image={data.image}
      />
      ))}
      <div className='flex items-center justify-between pl-4 pr-4 pb-1 pt-4'/>
     </MenuList>
    </Menu>
   </>
  )
}