import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,

  MenuDivider,
} from '@chakra-ui/react'
import { ChevronDownIcon, ShoppingCart } from 'lucide-react'

export function CartWidget({ width = 2, height = 2, ...rest}: { width?: number, height?: number }) {
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
    <MenuList>
     <MenuItem color={'#27272A'}>New File</MenuItem>
      <MenuItem color={'#27272A'}>New Window</MenuItem>
      <MenuDivider />
      <MenuItem color={'#27272A'}>Open...</MenuItem>
      <MenuItem color={'#27272A'}>Save File</MenuItem>
     </MenuList>
    </Menu>
   </>
  )
}