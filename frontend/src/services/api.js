import axios from 'axios';

const API_URL_2 = 'http://localhost:8000/api/';
const API_URL = 'http://localhost:8000/api/device-data/';

export const fetchRatings = async () => {
    const response = await axios.get(`${API_URL_2}ratings/`);
    return response.data;
};

export const fetchDeviceData = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const postDeviceData = async (data) => {
    const response = await axios.post(API_URL, data);
    return response.data;
};