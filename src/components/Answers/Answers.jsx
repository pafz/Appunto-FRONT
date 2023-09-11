import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeAnswer } from '../../features/answers/answerSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Answers = () => {
  const dispatch = useDispatch();
  const { doubts } = useSelector(state => {
    state.doubts;
  });
  const { user } = useSelector(state => {
    state.auth;
  });

  return (
    <div>
      Answers
      <button onClick={() => dispatch(likeAnswer(answer.answerId))}>
        Like
      </button>
      <p>Total {user.likeAnswer.length}</p>
      <p>{likeAnswer.answer}</p>
      <p>
        <FontAwesomeIcon icon={faHeart} />
      </p>
    </div>
  );
};

export default Answers;

//TODO: only 1 like, filter
//TODO: answer.like -> to know total likes
//TODO: call funct: total num
