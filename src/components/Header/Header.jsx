import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../features/auth/authSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  return (
    <>
      <nav>
        <span>header</span>
        <div>
          {user ? (
            <button onClick={() => dispatch(logout())}>Logout</button>
          ) : (
            <>
              <span>
                <Link to="/login">Login</Link>
              </span>
              <span>
                <Link to="/register">Register</Link>
              </span>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
