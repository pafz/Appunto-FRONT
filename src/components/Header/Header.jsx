import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../features/auth/authSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  return (
    <nav>
      <span>
        <Link to="/">Home </Link>
      </span>

      {user ? (
        <>
          <button onClick={() => dispatch(logout())}>Logout </button>
          <span>
            <Link to="/profile">{user.name}</Link>
          </span>
        </>
      ) : (
        <>
          <span>
            <Link to="/login">Login </Link>
          </span>
          <span>
            <Link to="/register">Register </Link>
          </span>
        </>
      )}
    </nav>
  );
};

export default Header;
