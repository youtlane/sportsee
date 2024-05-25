import axios from 'axios';

const API_URL = 'http://localhost:3000/user/';

export const getUserData = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};