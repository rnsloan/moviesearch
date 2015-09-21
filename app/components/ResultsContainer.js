import React from 'react';
import {rootBackdropUrl, searchMovie} from '../utils/movieApi'

import Results from './Results/Results'

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      query: '',
      page: 0,
      results: undefined,
      total_pages: 0,
      total_results: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    this.getResults(nextProps.location.query.title);
  }

  componentDidMount() {
    this.getResults(this.props.location.query.title);
  }

  getResults(query) {
    this.setState({
      loading: true,
      results: undefined
    });

    searchMovie(query)
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            loading: false,
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
    if (!this.state.results || !this.state.results.length) {
      return <div></div>;
    }

    if ( this.state.loading ) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1 className="sr-only">Results</h1>
        <p className="results-subtext">Searched for: <strong>{this.state.query}</strong></p>
        <Results query={this.state.query} results={this.state.results} rootBackdropUrl={rootBackdropUrl} />
      </div>
    );
  }
}