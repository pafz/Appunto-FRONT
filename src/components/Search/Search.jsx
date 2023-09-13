import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDoubtByName } from '../../features/doubts/doubtsSlice';
import DoubtDetail from '../DoubtDetail/DoubtDetail';

const Search = () => {
  const { doubtName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoubtByName(doubtName));
  }, [doubtName]);

  return (
    <div>
      <DoubtDetail></DoubtDetail>
    </div>
  );
};

export default Search;
