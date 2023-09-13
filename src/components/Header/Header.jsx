import React, { useState } from 'react';
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
} from '@chakra-ui/react';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value);
    if (e.key === 'Enter') {
      navigate('/search/' + text);
    }
  };

  // const onLogout = e => {
  //   e.preventDefault();
  //   dispatch(logout);
  //   navigate('/login');
  // };
  return (
    <Flex>
      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem colSpan="2">
          <Image src="src/assets/appunto.svg" w="30%"></Image>
        </GridItem>
        <GridItem colStart="4" colEnd="6">
          <Box>
            {user ? (
              <>
                <Flex alignItems="center" justifyContent="flex-end">
                  <HStack>
                    <Link to="/profile">{user.name}</Link>
                    <Link to="/doubts">Doubts</Link>
                    <Button
                      colorScheme="teal"
                      onClick={() => dispatch(logout())}
                    >
                      Logout
                    </Button>
                  </HStack>
                </Flex>
                <input
                  onKeyUp={handleChange}
                  placeholder="buscar duda"
                  name="text"
                />
              </>
            ) : (
              <HStack>
                <Link to="/login">Login</Link>
                <Link to="/register">
                  <Button mt="8%" colorScheme="teal">
                    Register
                  </Button>
                </Link>
              </HStack>
            )}
          </Box>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Header;
