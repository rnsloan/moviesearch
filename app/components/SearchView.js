import React from 'react';
import getMovies from '../utils/api/discover'

import Results from './Results'

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0
    };

    this.title = this.props.location.query.title;
  }

  componentDidMount() {
    getMovies(this.title)
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            page: response.data.page,
            results: response.data.results,
            total_pages: response.data.total_pages,
            total_results: response.data.total_results
          });
        }
      }).catch(function (e) {
        console.log(e);
      });
  }

  render() {
    return (
      <div>
        <h1>Search</h1>
        <p className="results">Searched for: {this.title}</p>
        <h2>Results</h2>
        <Results results={this.state.results} />
      </div>
    );
  }
}