import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../features/auth/authSlice';

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
    <nav>
      <div>
        {user ? (
          <>
            <span onClick={() => dispatch(logout())}>Logout</span>
            <span>
              <Link to="/profile">{user.name}</Link>
            </span>
            <span>
              <Link to="/doubts">Doubts</Link>
            </span>
          </>
        ) : (
          <div>
            <span>
              <Link to="/login">Login</Link>
            </span>
            <span>
              <Link to="/register">Register</Link>
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
