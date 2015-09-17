import React from 'react';
import Helmet from "react-helmet";

export default (props) => {
  const pageTitle = props.query ? `${props.query} - Movie Search` : 'Movie Search';
  const movies = props.results.map(function(movie, index){
    return (
      <li key={index}>
        {movie.title}
      </li>
    );
  });

  return (
      <ul>
        <Helmet title={pageTitle} />
        {movies}
      </ul>
  )
};
