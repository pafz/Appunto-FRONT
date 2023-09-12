import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { register, reset } from '../../features/auth/authSlice';
import { useToast } from '@chakra-ui/react';

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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={onChange}
      />
      <input
        type="password"
        name="password2"
        placeholder="password"
        value={password2}
        onChange={onChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};
export default Register;
