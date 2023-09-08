import axios from 'axios';
const API_URL = 'hppt://localhost:3000';

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
  return res.data;
};

const answerService = {
  likeAnswer,
};

export default answerService;
