import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeAnswer } from '../../features/answers/answerSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Answers = () => {
  const dispatch = useDispatch();
  // const { doubts } = useSelector(state => {
  //   state.doubts;
  // });

  // const { user } = useSelector(state => {
  //   state.auth;
  // });

  return (
    <div>
      answers
      {/* {answers.map(answer => {
        const isLiked = answer.likes.includes(user?._id);
      })}
      Answers
      <button>Like</button>
      {answer.likeAnswer.length}
      {isLiked ? (
        <FontAwesomeIcon
          icon={faHeartCircleCheck}
          onClick={() => console.log('dislike')}
        />
      ) : (
        <FontAwesomeIcon
          icon={faHeart}
          onClick={() => dispatch(likeAnswer(answer.answerId))}
        />
      )}
      <p>Total {user.likeAnswer.length}</p>
      <p>{likeAnswer.answer}</p>
      <p></p> */}
    </div>
  );
};

export default Answers;

//TODO: only 1 like, filter
//TODO: answer.like -> to know total likes
//TODO: call funct: total num
//TODO: inside return print doubts
