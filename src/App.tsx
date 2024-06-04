
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Box, Flex, Heading,Button } from '@chakra-ui/react'
import { AddIcon} from '@chakra-ui/icons'
import './App.css'
import { BASE_URL } from './constant'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Product } from './types/product'

function App() {

  const [data,setData]= useState<Product[]>();
  const [isLoading,setLoading]=useState<boolean>(false)

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = ()=>{
    setLoading(true);
    axios.get(BASE_URL).then((response)=>{
      setData(response.data);
    }).catch((error)=>{
      console.log(error);
    }).finally(()=>{
      setLoading(false);
    })
  }

  return (
    <Box shadow={'md'}
      rounded={'lg'}
      m={32}>
      <Flex px={5} justifyContent={'space-between'}>
        <Heading>
          Product List
        </Heading>
        <Button leftIcon={<AddIcon/>}>Add Product</Button>
      </Flex>
      <TableContainer>
        <Table variant="stripped">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th>Is In Store?</Th>
              <Th isNumeric>Price</Th>
              <th>Actions</th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((product : Product)=>{
              return(
                <Tr key={product.id}>
                  <Td>{product.id}</Td>
                  <Td>{product.name}</Td>
                  <Td>{product.description}</Td>
                  <Td>{product.isInStore ? 'Yes':'No'}</Td>
                  <Td isNumeric>{product.price}</Td>
                  <Td>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </Td>
                </Tr>
              )
            })}
            
          </Tbody>
        </Table>
      </TableContainer>
    </Box>

  )
}

export default App
