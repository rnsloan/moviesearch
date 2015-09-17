import React from 'react';
import Helmet from "react-helmet";

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
        <Helmet title='Movie Search' />
        <form onSubmit={(e) => this.submitForm(e)}>
          <SearchInput query={this.props.location.query} urlPath={this.props.location.pathname} />
        </form>
        {this.props.children}
      </div>
    );
  }
}
