import React, { useState, useEffect } from 'react';
import { TableContainer, Table, Thead, Tr, Th, Tbody, Box, Flex, Heading,Button,Td, HStack } from '@chakra-ui/react'
import axios from 'axios';
import { BASE_URL } from '../constant';
import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';

interface Book {
  title: string;
  isbn: string | null;
  numberOfPages: number | null;
}

function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(BASE_URL+'Book')
      .then(response => {
        if (response.data.isSuccess) {
          setBooks(response.data.result);
        } else {
          setError(response.data.message);
        }
      })
      .catch(error => {
        setError('An error occurred while fetching the data.');
      });
    setIsLoading(false);
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <TableContainer>
        <Table variant="stripped">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>ISBN</Th>
                <Th>Number of Pages</Th>
              
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
          {books.map((book, index) => (
          <Tr key={index}>
            <Td>{book.title}</Td>
            <Td>{book.isbn ? book.isbn : 'N/A'}</Td>
            <Td>{book.numberOfPages !== null ? book.numberOfPages : 'N/A'}</Td>
            <Td>
              <HStack gap={3}>
                <EditIcon color={'blue'} boxSize={22}/>
                <DeleteIcon color={'red'} boxSize={22}/>
                <ViewIcon boxSize={22}/>
              </HStack>
            </Td>
          </Tr>
        ))}
            
          </Tbody>
        </Table>
      </TableContainer>
      <ul>
        
      </ul>
    </div>
  );
}

export default BookList;
