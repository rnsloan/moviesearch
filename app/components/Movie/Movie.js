import React from 'react';
import styles from './Movie.scss';
import {formatReleaseDate, setBackdropPath} from '../../utils/helpers';

export default (props) => {
  const movie = props.movie;
  return (
    <div className={'mdl-card ' + styles.card}>
      <div className={'mdl-card__title ' + styles.title}
           style={setBackdropPath(props.rootBackdropPath, movie.backdrop_path)}>
        <h2 className={'mdl-card__title-text ' + styles.titleText}>{movie.title}</h2>
      </div>
      <div className={'mdl-card__supporting-text ' + styles.supportingText}>
        {movie.overview}
        <hr />
        <ul>
          <li>Release Date: {formatReleaseDate(movie.release_date)}</li>
          <li>Runtime: {movie.runtime}</li>
          <li>Revenue: {movie.revenue}</li>
          <li>Vote Average: {movie.vote_average}</li>
        </ul>
      </div>
      <div className="mdl-card__actions mdl-card--border">
        <a href={`http://imdb.com/title/` + movie.imdb_id} className="mdl-button mdl-button--colored">
          View on IMDB
        </a>
        <a href={'http://www.rottentomatoes.com/search/?sitesearch=rt&search=' + movie.title} className="mdl-button mdl-button--colored">
          Find on Rotten Tomatoes
        </a>
      </div>
    </div>
  );
};


/*
 genres
 backdrop_path
  poster_path
 */
