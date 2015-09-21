import moment from 'moment';
import React from 'react';
import Helmet from "react-helmet";
import styles from './Results.scss';

export default class extends React.Component {
  render() {
    const pageTitle = this.props.query ? `${this.props.query} - Movie Search` : 'Movie Search';
    const backdropUrl = this.props.backdropUrl;

    const moviesList = this.props.results.map(function (movie, index) {
      const releaseDate = moment(movie.release_date).format('Do MMMM YYYY');
      let backgroundImageStyle;

      if (movie.backdrop_path === null) {
        backgroundImageStyle = {backgroundImage: 'none', height: '70px', backgroundColor: 'rgba(0,0,0,0.2)'};
      } else {
        backgroundImageStyle = {backgroundImage: `url(${backdropUrl}${movie.backdrop_path})`};
      }

      return (
        <li key={index} className={styles.element}>
          <div className={'mdl-card ' + styles.card}>
            <div className={'mdl-card__title ' + styles.title} style={backgroundImageStyle}>
              <h2 className={'mdl-card__title-text ' + styles.titleText}>{movie.title}</h2>
            </div>
            <div className={'mdl-card__supporting-text ' + styles.supportingText}>
              {movie.overview}
              <hr />
              <strong>Release Date:</strong> {releaseDate}<br />
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
        <Helmet title={pageTitle}/>
        {moviesList}
      </ul>
    )

  }
};
