import React from 'react';
import ReactDOM from 'react-dom';

export default class extends React.Component {
  submitForm(e) {
    e.preventDefault();
    const searchQuery = this.refs.searchInput.value;
    this.props.history.pushState(null, `/search`, {title: searchQuery});
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <form onSubmit={(e) => this.submitForm(e)}>
          <input type="text" ref="searchInput" placeholder="e.g. mad max" />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}
