import {polyfill} from 'es6-promise';
import axios from 'axios';

polyfill();

if (typeof __MOVIEAPIKEY__ === 'undefined') {
  console.error('warning: themoviedb API key has not been set')
}

const urlPath = '//api.themoviedb.org/3/';

export function searchMovie(title) {
  return axios.get(`${urlPath}search/movie?api_key=${__MOVIEAPIKEY__}&query=${title}`)
}
export function getMovie(id) {
  return axios.get(`${urlPath}movie/${id}?api_key=${__MOVIEAPIKEY__}`)
}

export const rootBackdropPath = '//image.tmdb.org/t/p/w1280/';
