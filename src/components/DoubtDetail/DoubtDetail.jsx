import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getById } from '../../features/doubts/doubtsSlice';
import { Spinner, Box } from '@chakra-ui/react';

const DoubtDetail = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const { doubt, isLoading } = useSelector(state => state.doubts);

  useEffect(() => {
    dispatch(getById(_id));
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1>Doubt Detail</h1>
      <h2>{doubt.topic}</h2>
      <p>{doubt.question}</p>
      <p>{doubt.User?.name}</p>
      {doubt._idAnswers.map(answer => (
        <Box key={answer._id}>
          <p>{answer.reply}</p>
        </Box>
      ))}
    </div>
  );
};

export default DoubtDetail;
