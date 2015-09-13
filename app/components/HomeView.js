import React from 'react';
import ReactDOM from 'react-dom';

export default class extends React.Component {
  handleClick(e) {
    e.preventDefault();
    const searchQuery = this.refs.searchInput.value;

  }

  render() {
    return (
      <div styleName='home'>
        <h1>Home</h1>
        <input type="text" ref="searchInput" placeholder="e.g. mad max" />
        <button onClick={(e) => this.handleClick(e)}>Search</button>
      </div>
    );
  }
}

