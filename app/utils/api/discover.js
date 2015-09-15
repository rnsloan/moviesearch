import axios from 'axios';

if (typeof __MOVIEAPIKEY__ === 'undefined') {
  console.error('warning: themoviedb API key has not been set')
}

export default function(title) {
  return axios.get(`//api.themoviedb.org/3/search/movie?api_key=${__MOVIEAPIKEY__}&query=${title}`)
}

//return axios.get(`//api.themoviedb.org/3/discover/movie?api_key=${__MOVIEAPIKEY__}&`)
