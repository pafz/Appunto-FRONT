import React from 'react';
import { useDispatch } from 'react-redux';
import { likeAnswer } from '../../features/answers/answerSlice';

const Answers = () => {
  const dispatch = useDispatch();
  //TODO: only 1 like, filter
  //TODO: answer.like -> to know total likes

  return (
    <div>
      Answers
      <button onClick={() => dispatch(likeAnswer(answer.answerId))}>
        Like{' '}
      </button>
      <p>{likeAnswer.answer}</p>
    </div>
    //TODO: call funct: total num
  );
};

export default Answers;
