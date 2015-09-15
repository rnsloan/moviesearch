import React from 'react';
import { Link } from 'react-router';
import styles from './Header.scss';

export default (props) => {
  return (
    <header className="mdl-layout__header mdl-layout__header--scroll">
      <div className={'mdl-layout__header-row ' + styles.headerRow}>
        <i className={'material-icons ' + styles.icon}>movie</i>
        <span className={'mdl-layout-title ' + styles.title}>
          {props.title}
        </span>

        <nav className="mdl-navigation">
          <Link to={`/`} className="mdl-navigation__link">Search</Link>
          <a className="mdl-navigation__link" href="">Discover</a>
        </nav>
      </div>
    </header>
  )
};
