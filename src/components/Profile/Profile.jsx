import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAndDoubts } from '../../features/auth/authSlice';
import { Spinner } from '@chakra-ui/react';

const Profile = () => {
  const { user, isLoading, userDoubts } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAndDoubts());
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  const profileDoubts = userDoubts._idDoubt?.map(userDoubt => {
    return (
      <div key={userDoubt._id}>
        <span>Doubt: {userDoubt.question}</span>
      </div>
    );
  });

  return (
    <div>
      <h1>Profile</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.age}</p>
      <div>
        {user.name}'s doubts: {profileDoubts}
      </div>
      <p></p>
    </div>
  );
};

export default Profile;
