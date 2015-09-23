import moment from 'moment';
import React from 'react';
import { Link } from 'react-router';
import styles from './Results.scss';
import {formatReleaseDate, setBackdropPath} from '../../utils/helpers';

function createPageTitle(query) {
  return query ? `${query} - Movie Search` : 'Movie Search';
}

export default (props) => {
  const moviesList = props.results.map(function (movie, index) {
    return (
      <li key={index} className={styles.element}>
        <div className={'mdl-card ' + styles.card}>
          <div className={'mdl-card__title ' + styles.title} style={setBackdropPath(props.rootBackdropPath, movie.backdrop_path)}>
            <h2 className={'mdl-card__title-text ' + styles.titleText}>{movie.title}</h2>
          </div>
          <div className={'mdl-card__supporting-text ' + styles.supportingText}>
            {movie.overview}
            <hr />
            <strong>Release Date:</strong> {formatReleaseDate(movie.release_date)}<br />
            <strong>Vote Average:</strong> {movie.vote_average}
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <Link to={`/movie/${movie.id}`} className="mdl-button mdl-button--colored">
              VIEW MOVIE <span className='sr-only'>{movie.title}</span>
            </Link>
          </div>
        </div>
      </li>
    );
  });

  return (
    <ul className={styles.list}>
      {moviesList}
    </ul>
  )
};
