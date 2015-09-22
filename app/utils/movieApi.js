import axios from 'axios';

if (typeof __MOVIEAPIKEY__ === 'undefined') {
  console.error('warning: themoviedb API key has not been set')
}

const urlPath = '//api.themoviedb.org/3/';

export default {
  searchMovie: function(title) {
    return axios.get(`${urlPath}search/movie?api_key=${__MOVIEAPIKEY__}&query=${title}`)
  },
  rootBackdropPath: '//image.tmdb.org/t/p/w1280/'
}

//return axios.get(`//api.themoviedb.org/3/discover/movie?api_key=${__MOVIEAPIKEY__}&`)
