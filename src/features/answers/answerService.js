import axios from 'axios';

const API_URL = 'hppt://localhost:3000';

//FIXME: return res.data OR answerData ...

const createAnswer = async answerData => {
  const token = JSON.parse(localStorage.getItem('token'));
  const res = await axios.post(API_URL + '/', answerData, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const likeAnswer = async answerId => {
  const token = JSON.parse(localStorage.getItem('token'));
  const res = await axios.post(
    API_URL + '/answers/answers/' + answerId + '/like',
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return answerId;
};

const dislikeAnswer = async answerId => {
  const token = JSON.parse(localStorage.getItem('token'));
  const res = await axios.post(
    API_URL + '/answers/answers/' + answerId + '/dislike',
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return answerId;
};

const deleteAnswer = async answerId => {
  const token = JSON.parse(localStorage.getItem('token'));
  await axios.delete(API_URL + '/delete/' + answerId, {
    headers: {
      Authorization: token,
    },
  });
  return answerId;
};

const answerService = {
  createAnswer,
  likeAnswer,
  dislikeAnswer,
  deleteAnswer,
};

export default answerService;
