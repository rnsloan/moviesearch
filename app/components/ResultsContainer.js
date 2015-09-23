import React from 'react';
import Helmet from "react-helmet";
import {rootBackdropPath, searchMovie} from '../utils/movieApi';

import Results from './Results/Results';
import {progressLoaderSignal} from './ProgressLoader/ProgressLoader';

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

    this.createPageTitle = this.createPageTitle.bind(this);
    this.displayProgressLoader = this.displayProgressLoader.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.getResults(nextProps.location.query.title);
  }

  componentDidMount() {
    this.getResults(this.props.location.query.title);
  }

  createPageTitle(query) {
    return query ? `${query} - Movie Search` : 'Movie Search';
  }

  displayProgressLoader(bool) {
    progressLoaderSignal.dispatch(bool);
  }

  getResults(query) {
    this.setState({
      loading: true,
      results: undefined
    });

    this.displayProgressLoader(true);

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
          this.displayProgressLoader(false);
        }
      }).catch(function (e) {
        console.log(e);
        this.displayProgressLoader(false);
      });
  }

  render() {
    if (this.state.loading || !this.state.results || !this.state.results.length) {
      return <div></div>;
    }

    return (
      <div>
        <Helmet title={this.createPageTitle(this.state.query)} />
        <h1 className="sr-only">Results</h1>
        <p className="results-subtext">Searched for: <strong>{this.state.query}</strong></p>
        <Results query={this.state.query} results={this.state.results} rootBackdropPath={rootBackdropPath}/>
      </div>
    );
  }
}