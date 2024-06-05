
import { Box, Flex, Heading, Button, useDisclosure } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import './App.css'
import Header from './shared/Header'
import ProductList from './features/bookList'
import BookForm from './features/bookForm'


function App() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (

    <Box shadow={'md'}
      rounded={'lg'}
      m={32}>
      <Header />
      <Flex px={5} justifyContent={'space-between'}>
        <Heading>
          Product List
        </Heading>
        <Button leftIcon={<AddIcon />} onClick={onOpen}>Add Product</Button>
      </Flex>

      <ProductList />
      <BookForm isOpen={isOpen} onClose={onClose} />
    </Box>

  )
}

export default App