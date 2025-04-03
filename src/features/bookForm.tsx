import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, Textarea, VStack } from "@chakra-ui/react"
import { useState } from "react"

type bookFormProps = {
  isOpen: boolean,
  onClose: () => void
}

const BookForm = ({ isOpen, onClose }: bookFormProps) => {

  const [book, setBook] = useState({
    title: '',
    isbn: '',
    pages: 0
  })

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new Book</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input type="text" placeholder="Book Title" 
              value={book.title} 
              onChange={(e) => setBook({ ...book, title: e.target.value })} />

              <Textarea placeholder="ISBN" mt={4} 
              value={book.isbn} 
              onChange={(e) => setBook({ ...book, isbn: e.target.value })}
              />
              <Input type="number" placeholder="Nu of pages" mt={4} 
              value={book.pages} 
              onChange={(e) => setBook({ ...book, pages: parseInt(e.target.value) })}
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            {JSON.stringify(book)}
            <Button variant={'ghost'} mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default BookForm