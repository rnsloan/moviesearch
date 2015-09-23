import React from 'react';
import {formatReleaseDate, setBackdropPath} from '../../utils/helpers';
import styles from './Movie.scss';

function formatGenres(genreList) {
  const list = [];
  genreList.forEach(function (obj) {
    list.push(obj.name);
  })
  return list.join(', ');
}

//http://stackoverflow.com/a/2901298
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatRunningTime(timeInMinutes) {
  const hours = ( Math.floor( timeInMinutes/60) );
  const minutes = ( timeInMinutes - (hours * 60) );

  const hoursString = hours === 1 ? 'hour' : 'hours';
  const minutesString = minutes === 1 ? 'minute' : 'minutes';

  return `${hours} ${hoursString} ${minutes} ${minutesString}`;
}

export default (props) => {
  const movie = props.movie;
  return (
    <div className={'mdl-card ' + styles.card}>
      <div className={'mdl-card__title ' + styles.title}
           style={setBackdropPath(props.rootBackdropPath, movie.backdrop_path)}>
        <h1 className={'mdl-card__title-text ' + styles.titleText}>{movie.title}</h1>
      </div>
      <div className={'mdl-card__supporting-text ' + styles.supportingText}>
        <h2 className={'mdl-typography--title ' + styles.overviewTitle}>Overview</h2>
        <p>{movie.overview}</p>
        <hr />
        <ul className={styles.detailsList}>
          <li><span className={styles.strong}>Release Date:</span> {formatReleaseDate(movie.release_date)}</li>
          {movie.genres.length != 0 && <li><span className={styles.strong}>Genres:</span> {formatGenres(movie.genres)}</li>}
          {movie.runtime != 0 && <li><span className={styles.strong}>Runtime:</span> {formatRunningTime(movie.runtime)}</li>}
          {movie.revenue != 0 && <li><span className={styles.strong}>Revenue:</span> {'$' + numberWithCommas(movie.revenue)}</li>}
          {movie.vote_average != 0 && <li><span className={styles.strong}>Vote Average:</span> {movie.vote_average} <small>({movie.vote_count} votes)</small></li>}
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
