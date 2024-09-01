import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react"
import { ShoppingBasket } from "lucide-react"
import type { ProductType } from "../@types/types"

export function Product({ info, index }: ProductType) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
     <div className="flex  flex-col h-[19.375rem] w-[17rem] gap-[.5rem] border-hrColor p-[.375rem] mt-5 cursor-pointer" 
      key={index} onClick={onOpen}
     >
      <div className="absolute z-50" onClick={(e) => e.stopPropagation()}>
       <ShoppingBasket height={32} width={32} className="cursor-pointer bg-hrColor p-[.3125rem] rounded-[.9375rem]" color="#fff"/> 
      </div>
      <img src={info.image} alt={info.title} className="flex w-[9.5rem] h-[9.5rem] justify-center items-center mx-auto flex-shrink-0"/>
      <hr className="bg-hrColor h-[.1px] w-full mx-auto border-none "/>
      <h3 className="text-cinzaClaro text-left font-medium">{info.title}</h3>
      <p className="text-cinzaEscuro w-full">{info.value}</p>
     </div>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}