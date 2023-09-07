import axios from "axios";

const API_URL = "http://localhost:3000";

const createDoubt = async (doubtData) => {
    const res = await axios.post(API_URL + "/doubts", doubtData);
    return res.data;
};
const getAll = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(API_URL + "/doubts/all/doubts", { headers: { Authorization: token } });
    return res.data;
};

const getById = async (id) => {
    const res = await axios.get(API_URL + "/doubts/" + id, { headers: { Authorization: token } });
    return res.data;
};

const getByTopic = async (topic) => {
    const res = await axios.get(API_URL + "/doubts/topic/" + topic, { headers: { Authorization: token } });
    return res.data;
};

const deleteDoubt = async (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    await axios.delete(API_URL + "/doubts/doubts" + id, {
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
    deleteDoubt,
};

export default doubtService;
