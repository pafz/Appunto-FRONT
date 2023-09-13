import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Input, Text, VStack } from '@chakra-ui/react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = e => {
    e.preventDefault();
    dispatch(login(formData));
    //TODO: error pass is not correct & navigate when is true
    navigate('/');
  };

  return (
    <>
      <Card w="30%" p="3%" mt="10%" ml="35%" boxShadow="inner" bg="">
        <form onSubmit={onSubmit}>
          <VStack spacing="4" align="center">
            <Text color="teal" as="b" fontSize="1.2em" mb="3%">
              Bienvenid@
            </Text>
            <Input
              type="email"
              name="email"
              placeholder="email@edem.es"
              value={email}
              onChange={onChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={onChange}
            />
            <Button mt="8%" colorScheme="teal" type="submit">
              Login
            </Button>
          </VStack>
        </form>
      </Card>
    </>
  );
};
export default Login;
