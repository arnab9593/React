import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Products from './Pages/Products';
import Home from './Pages/Home';
import { Link } from 'react-router-dom';
import { Box, Button, ButtonGroup, Container, Flex, Heading, HStack, Spacer } from '@chakra-ui/react';
function App() {
  return (
    <>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box p='2'>
          <Heading size='md'>Sign Up</Heading>
        </Box>
        <Spacer />
        <HStack>
          <Link to="/">Home</Link>
          <Link to="/Products">Products</Link>
        </HStack>
      </Flex>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Products' element={<Products />}></Route>
      </Routes>
    </>
  );
}

export default App;
