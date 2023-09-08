import axios from 'axios';

const API_URL = 'http://localhost:3001';

const createDoubt = async doubtData => {
  const res = await axios.post(`${API_URL}/doubts`, doubtData);
  return res.data;
};

const doubtService = {
  createDoubt,
};

export default doubtService;
