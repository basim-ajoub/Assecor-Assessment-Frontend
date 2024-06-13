import axios from 'axios';

const API_URL = 'https://swapi.dev/api';

const handleError = (error, context) => {
  console.error(`There was an error fetching ${context}:`, error);
};

export default {
  getFilms() {
    return axios.get(`${API_URL}/films/`)
      .then(response => response.data)
      .catch(error => {
        handleError(error, 'films');
      });
  },
  getPlanets() {
    return axios.get(`${API_URL}/planets/`)
      .then(response => response.data)
      .catch(error => {
        handleError(error, 'planets');
      });
  },
  getCharaktere() {
    return axios.get(`${API_URL}/people/`)
    .then(response => response.data)
    .catch(error => {
      handleError(error, 'characters');
    });
  },
  getItemsByUrl(url) {
    return axios.get(`${url}`)
      .then(response => response.data)
      .catch(error => {
        handleError(error, `data from URL: ${url}`);
      });
  },
  getItemById(id, type) {
    return axios.get(`${API_URL}/${type}/${id}/`)
      .then(response => response.data)
      .catch(error => {
        handleError(error, `${type} with ID ${id}`);
      });
  },
};
