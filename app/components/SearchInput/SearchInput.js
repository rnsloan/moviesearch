import React from 'react';
import styles from './SearchInput.scss';

export default class extends React.Component {
  componentDidMount() {
    const Material = require('exports?componentHandler&MaterialRipple!material-design-lite/material.js');
    const input = this.refs.mdlInput;
    Material.componentHandler.upgradeElement(input);
  }

  render() {
    return (
      <div ref="mdlInput" className={'mdl-textfield mdl-js-textfield ' + styles.textField}>
        <input id="searchInput" className={'mdl-textfield__input ' + styles.input} type="text" />
        <label className={'mdl-textfield__label ' + styles.label} htmlFor="search">Movie Title</label>
      </div>
    );
  }
}