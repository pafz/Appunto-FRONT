import axios from 'axios';

export const API_URL = 'http://localhost:3000';

const createDoubt = async doubtData => {
  const res = await axios.post(API_URL + '/doubts', doubtData);
  return res.data;
};
const getAll = async () => {
  const token = JSON.parse(localStorage.getItem('token'));
  const res = await axios.get(API_URL + '/doubts/all/doubts', {
    headers: { Authorization: token },
  });
  return res.data;
};

const getById = async _id => {
  const token = JSON.parse(localStorage.getItem('token'));
  const res = await axios.get(API_URL + '/doubts/' + _id, {
    headers: { Authorization: token },
  });
  return res.data;
};

const getByTopic = async topic => {
  const res = await axios.get(API_URL + '/doubts/topic/' + topic, {
    headers: { Authorization: token },
  });
  return res.data;
};

const getDoubtByName = async doubtTitle => {
  const res = await axios.get(API_URL + '/doubts/title/' + doubtTitle);
  return res.data;
};

const deleteDoubt = async _id => {
  const token = JSON.parse(localStorage.getItem('token'));
  await axios.delete(API_URL + '/doubts/doubts/' + _id, {
    headers: {
      Authorization: token,
    },
  });
  return id;
};

const doubtService = {
  createDoubt,
  getAll,
  getById,
  getByTopic,
  getDoubtByName,
  deleteDoubt,
};

export default doubtService;
