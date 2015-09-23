import {polyfill} from 'es6-promise';
import axios from 'axios';

polyfill();

if (typeof __MOVIEAPIKEY__ === 'undefined') {
  console.error('warning: themoviedb API key has not been set')
}

const urlPath = '//api.themoviedb.org/3/';

export default {
  searchMovie: function(title) {
    return axios.get(`${urlPath}search/movie?api_key=${__MOVIEAPIKEY__}&query=${title}`)
  },
  getMovie: function(id) {
    return axios.get(`${urlPath}movie/${id}?api_key=${__MOVIEAPIKEY__}`)
  },
  rootBackdropPath: '//image.tmdb.org/t/p/w1280/'
}
