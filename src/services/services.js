import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const apiKey = '65e043c24785898be00b4abc12fcdaae';

export const getMovies = (page) => (
  axios.get(`discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
);

export const getMovieDetail = (id) => (
  axios.get(`/movie/${id}?api_key=${apiKey}&language=en-US`)
);
