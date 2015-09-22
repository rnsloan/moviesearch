import moment from 'moment';
import React from 'react';
import Helmet from "react-helmet";
import styles from './Results.scss';

function createPageTitle(query) {
  return query ? `${query} - Movie Search` : 'Movie Search';
}

function formatReleaseDate(original) {
  return moment(original).format('Do MMMM YYYY');
}

function setBackdropPath(rootBackdropUrl, backdropPath) {
  if (backdropPath === null) {
    return {backgroundImage: 'none', height: '70px'};
  } else {
    return {backgroundImage: `url(${rootBackdropUrl}${backdropPath})`};
  }
}

export default (props) => {
  const moviesList = props.results.map(function (movie, index) {
    return (
      <li key={index} className={styles.element}>
        <div className={'mdl-card ' + styles.card}>
          <div className={'mdl-card__title ' + styles.title} style={setBackdropPath(props.rootBackdropUrl, movie.backdrop_path)}>
            <h2 className={'mdl-card__title-text ' + styles.titleText}>{movie.title}</h2>
          </div>
          <div className={'mdl-card__supporting-text ' + styles.supportingText}>
            {movie.overview}
            <hr />
            <strong>Release Date:</strong> {formatReleaseDate(movie.release_date)}<br />
            <strong>Genres:</strong> {movie.genre_ids.join(', ')}<br />
            <strong>Vote Average:</strong> {movie.vote_average}
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored">
              VIEW MOVIE <span className='sr-only'>{movie.title}</span>
            </a>
          </div>
        </div>
      </li>
    );
  });

  return (
    <ul className={styles.list}>
      <Helmet title={createPageTitle(props.query)}/>
      {moviesList}
    </ul>
  )
};
