
import axios from 'axios';

const API_URL = 'https://dragonball-api.com/api/characters';

export const fetchCharacters = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};
