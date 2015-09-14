import React from 'react';

export default (props) => {
  const movies = props.results.map(function(movie, index){
    return (
      <li key={index}>
        {movie.title}
      </li>
    );
  });

  return (
    <ul>
      {movies}
    </ul>
  )
};
