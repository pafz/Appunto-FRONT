import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { register, reset } from '../../features/auth/authSlice';
import { notification } from 'antd';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    age: '',
  });
  const { name, email, password, password2, age } = formData;
  const { message, isSuccess, isError } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: message,
      });
    }
    if (isError) {
      notification.error({
        message: message,
      });
    }
    dispatch(reset());
  }, [message, isSuccess, isError]);

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      return notification.error({
        message: 'Error',
        description: 'Passwords do not match',
      });
    } else {
      dispatch(register(formData));
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
      <input
        type="number"
        name="age"
        placeholder="age"
        value={age}
        onChange={onChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};
export default Register;
