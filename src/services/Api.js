import axios from 'axios';

const API_KEY = 'be663d31bbfc7d88185b1636b38ccdf5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const trendingQuery = async () => {
  const resp = await axios.get('trending/movie/day', params);
  return resp.data.results;
};

export const detailsQuery = async id => {
  const resp = await axios.get(`movie/${id}`, params);
  return resp.data;
};

export const castQuery = async id => {
  const resp = await axios.get(`movie/${id}/credits`, params);
  return resp.data.cast;
};

export const reviewsQuery = async id => {
  const resp = await axios.get(`movie/${id}/reviews`, params);
  return resp.data.results;
};

export const searchQuery = async () => {
  const resp = await axios.get('search/movie?query=jaws', params);
  return resp.data.results;
};
