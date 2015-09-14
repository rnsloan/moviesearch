import axios from 'axios';

if (typeof __MOVIEAPIKEY__ === 'undefined') {
  console.error('warning: themoviedb API key has not been set')
}

export default function() {
  return axios.get(`//api.themoviedb.org/3/discover/movie?api_key=${__MOVIEAPIKEY__}`)
}
