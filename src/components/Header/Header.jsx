import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../features/auth/authSlice';
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';

const Header = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  // const onLogout = e => {
  //   e.preventDefault();
  //   dispatch(logout);
  //   navigate('/login');
  // };
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Box w="40vh">
        <Link to="/">
          <Image src="src/assets/appunto.svg" pl="18vh" mt="4vh" />
        </Link>
      </Box>

      <Box pr="10%" pt="3%">
        {user ? (
          <Flex alignItems="center">
            <HStack spacing={20}>
              <Link to="/">
                <Text fontSize="1.1em">Inicio</Text>
              </Link>
              <Link to="/doubts">
                <Text fontSize="1.1em">Doubts</Text>{' '}
              </Link>
              <Link to="/profile">{user.name}</Link>
              <Button colorScheme="teal" onClick={() => dispatch(logout())}>
                Logout
              </Button>
            </HStack>
          </Flex>
        ) : (
          <HStack spacing={4}>
            <Link to="/login">Login</Link>
            <Link to="/register">
              <Button colorScheme="teal">Register</Button>
            </Link>
          </HStack>
        )}
      </Box>
    </Flex>
  );
};

export default Header;
