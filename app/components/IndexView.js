import React from 'react';

import SearchInput from './SearchInput/SearchInput'

export default class extends React.Component {
  submitForm(e) {
    e.preventDefault();
    const searchQuery = document.getElementById('searchInput').value;
    this.props.history.pushState(null, `/search`, {title: searchQuery});
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.submitForm(e)}>
          <SearchInput />
        </form>
        {this.props.children}
      </div>
    );
  }
}
