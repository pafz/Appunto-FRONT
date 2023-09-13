import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { register, reset } from '../../features/auth/authSlice';
import {
  Button,
  Card,
  Input,
  Link,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = formData;
  const { message, isSuccess, isError } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: 'Éxito',
        description: message,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
    if (isError) {
      toast({
        title: 'Error',
        description: message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
    // dispatch(reset()); NOT NECESARY???
  }, [message, isSuccess, isError, toast]);

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = e => {
    e.preventDefault();
    // HERE toast()??? .error
    if (password !== password2) {
      return notification.error({
        message: 'Error',
        description: 'Passwords do not match',
      });
    } else {
      dispatch(register(formData));
      setTimeout(() => {
        navigate('/register');
      }, 3000);
    }
  };
  return (
    <Card w="30%" p="3%" mt="10%" ml="35%">
      <form onSubmit={onSubmit}>
        <VStack spacing="4" align="center">
          <Text color="teal" as="b" fontSize="1.2em" mb="3%">
            Bienvenid@
          </Text>
          <Input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={onChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="email"
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
          <Input
            type="password"
            name="password2"
            placeholder="password"
            value={password2}
            onChange={onChange}
          />
          <Button mt="8%" colorScheme="teal" type="submit">
            Register
          </Button>
        </VStack>
      </form>
    </Card>
  );
};
export default Register;
