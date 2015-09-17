import React from 'react';
import {searchMovie} from '../utils/movieApi'

import Results from './Results'

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      page: 0,
      results: undefined,
      total_pages: 0,
      total_results: 0
    };

    this.title = this.props.location.query.title;
  }

  componentWillReceiveProps(nextProps) {
    this.getResults(nextProps.location.query.title);
  }

  componentDidMount() {
    this.getResults(this.title);
  }

  getResults(query) {
    this.setState({results: undefined});


    searchMovie(query)
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            query: query,
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
    if ( !this.state.results ) {
      return <div></div>;
    }

    return (
      <div>
        <h1>Search</h1>
        <p className="results">Searched for: {this.state.query}</p>
        <h2>Results</h2>
        <Results results={this.state.results} />
      </div>
    );
  }
}