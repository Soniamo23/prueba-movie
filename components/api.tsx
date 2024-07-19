import axios from 'axios';

export async function fetchFilms() {
  try {
    const response = await axios.get('http://localhost:8082/Film');
    return response.data;
  } catch (error) {
    return [];
  }
}

export async function fetchScenes(filmId:number) {
  try {
    const response = await axios.get('http://localhost:8082/scene?film_id=${filmId}');
    return response.data;
  } catch (error) {
    return [];
  }
}

export async function fetchCharacters() {
  try {
    const response = await axios.get('http://localhost:8082/character');
    return response.data;
  } catch (error) {
    return [];
  }
}

export async function updateFilm(id: number, updatedData: object) {
  try {
    const response = await axios.put('http://localhost:8082/film/${id}, updatedData');
    return response.data;
  } catch (error) {
    console.error('Error updating film:', error);
    throw error;
  }
}

export async function deleteFilm(id:number) {
  try {
    const response = await axios.delete('http://localhost:8082/film/${id}');
    return response.data;
  } catch (error) {
    console.error('Error deleting film:', error);
    throw error;
  }
}