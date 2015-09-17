import React from 'react';
import styles from './SearchInput.scss';

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };

    this.addLabelPlaceholderText = this.addLabelPlaceholderText.bind(this);
    this.clearLabelPlaceholderText = this.clearLabelPlaceholderText.bind(this);
  }

  componentDidMount() {
    this.setState({
      inputValue: this.props.query.title
    });

    const Material = require('exports?componentHandler&MaterialRipple!material-design-lite/material.js');
    const input = this.refs.mdlInput;
    Material.componentHandler.upgradeElement(input);

    if (this.props.query.title) {
      this.clearLabelPlaceholderText()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.query.title) {
      this.setState({
        inputValue: nextProps.query.title
      });
      this.clearLabelPlaceholderText();
    }

    if (nextProps.urlPath === '/') {
      this.setState({
        inputValue: ''
      });
      this.addLabelPlaceholderText();
    }
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }

  clearLabelPlaceholderText() {
    this.refs.mdlInput.classList.add("is-dirty");
  }

  addLabelPlaceholderText() {
    this.refs.mdlInput.classList.remove("is-dirty");
  }

  render() {
    return (
      <div ref="mdlInput" className={'mdl-textfield mdl-js-textfield ' + styles.textField}>
        <input id="searchInput" className={'mdl-textfield__input ' + styles.input} type="text" value={this.state.inputValue} onChange={(e) => this.handleChange(e)} />
        <label className={'mdl-textfield__label ' + styles.label} htmlFor="search">Movie Title</label>
      </div>
    );
  }
}
