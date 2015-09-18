import React from 'react';
import { Link } from 'react-router';
import styles from './Header.scss';

export default (props) => {
  return (
    <header className="mdl-layout__header mdl-layout__header--scroll">
      <div className={'mdl-layout__header-row ' + styles.headerRow}>
        <Link to={`/`} className={'home-link ' + styles.link}>
          <i className={'material-icons ' + styles.icon}>movie</i>
          <span className={'mdl-layout-title ' + styles.title}>
            {props.title}
          </span>
        </Link>

        <div className="mdl-layout-spacer"></div>
      </div>
    </header>
  )
};
