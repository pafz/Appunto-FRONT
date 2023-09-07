<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> ab88ecb (login DONE)
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user } = useSelector(state => state.auth);
<<<<<<< HEAD

  return (
    <div>
      <h1>Profile</h1>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
=======
  return (
    <div>
      <h1>Profile</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
>>>>>>> ab88ecb (login DONE)
    </div>
  );
};

export default Profile;
