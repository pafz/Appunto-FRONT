import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../features/auth/authSlice';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch();

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = e => {
    e.preventDefault();
    dispatch(register(formData));
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
