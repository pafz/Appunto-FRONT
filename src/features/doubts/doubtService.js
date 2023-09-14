import axios from "axios";

export const API_URL = "http://localhost:3000";

const createDoubt = async (doubtData) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const formData = new FormData();
    formData.append("topic", doubtData.topic);
    formData.append("question", doubtData.question);
    formData.append("image", doubtData.image);
    const res = await axios.post(API_URL + "/doubts", formData, {
        headers: { Authorization: token },
    });
    return res.data;
};

const getAll = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(API_URL + "/doubts/all/doubts", {
        headers: { Authorization: token },
    });
    return res.data;
};

const getById = async (_id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(API_URL + "/doubts/" + _id, {
        headers: { Authorization: token },
    });
    return res.data;
};

const getByTopic = async (topic) => {
    const res = await axios.get(API_URL + "/doubts/topic/" + topic, {
        headers: { Authorization: token },
    });
    return res.data;
};

const getDoubtByName = async (doubtTitle) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(API_URL + "/doubts/search/" + doubtTitle, {
        headers: { Authorization: token },
    });
    return res.data;
};

const deleteDoubt = async (_id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    await axios.delete(API_URL + "/doubts/doubts/" + _id, {
        headers: {
            Authorization: token,
        },
    });
    return id;
};

const createAnswer = async (answerData) => {
    const res = await axios.post(API_URL + "/answers", answerData);
    return res.data;
};

const getAnswerById = async (_id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(API_URL + "/answers/by_id" + _id, {
        headers: { Authorization: token },
    });
    return res.data;
};

const doubtService = {
    createDoubt,
    getAll,
    getById,
    getByTopic,
    getDoubtByName,
    deleteDoubt,
    createAnswer,
    getAnswerById,
};

export default doubtService;
