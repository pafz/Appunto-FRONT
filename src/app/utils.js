import { API_URL } from "../features/doubts/doubtService";

const getImageURL = (imagePath) => {
    return API_URL + imagePath;
};

export default getImageURL;
