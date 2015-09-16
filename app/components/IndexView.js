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
      <form onSubmit={(e) => this.submitForm(e)}>
        <SearchInput ref="foobar" />
      </form>
    );
  }
}
