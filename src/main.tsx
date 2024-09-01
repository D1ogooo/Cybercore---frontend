import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import {customTheme} from '../theme.ts'
import { Router } from './routes/index'
import './index.css'

createRoot(document.getElementById('root')!).render(
 <StrictMode>
  <ChakraProvider theme={customTheme}>
   <Router />
  </ChakraProvider>
 </StrictMode>,
)
