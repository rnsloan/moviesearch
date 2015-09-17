import React from 'react';
import styles from './SearchInput.scss';

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const Material = require('exports?componentHandler&MaterialRipple!material-design-lite/material.js');
    const input = this.refs.mdlInput;
    Material.componentHandler.upgradeElement(input);
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <div ref="mdlInput" className={'mdl-textfield mdl-js-textfield ' + styles.textField}>
        <input id="searchInput" className={'mdl-textfield__input ' + styles.input} type="text" />
        <label className={'mdl-textfield__label ' + styles.label} htmlFor="search">Movie Title</label>
      </div>
    );
  }
}

SearchInput.contextTypes = {
  location: React.PropTypes.object
}