import axios from 'axios';

const API_URL = 'http://localhost:8082'; 

export const getFilms = async () => {
    try {
        const response = await axios.get(`${API_URL}/film`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const addFilm = async (film) => {
    try {
        const response = await axios.post(`${API_URL}/film`, film);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


