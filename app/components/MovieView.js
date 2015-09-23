import React from 'react';
import Helmet from "react-helmet";
import {getMovie, rootBackdropPath} from '../utils/movieApi';

import Movie from './Movie/Movie';
import {progressLoaderSignal} from './ProgressLoader/ProgressLoader';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: undefined
    };

    this.createPageTitle = this.createPageTitle.bind(this);
    this.displayProgressLoader = this.displayProgressLoader.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.loadMovie(nextProps.params.id);
  }

  componentDidMount() {
    this.loadMovie(this.props.params.id);
  }

  createPageTitle(title) {
    return title ? `${title} - Movie Search` : 'Movie Search';
  }

  displayProgressLoader(bool) {
    progressLoaderSignal.dispatch(bool);
  }

  loadMovie(id) {
    this.setState({
      loading: true,
      data: undefined
    });

    this.displayProgressLoader(true);

    getMovie(id)
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            loading: false,
            data: response.data
          });
          this.displayProgressLoader(false);
        }
      }).catch(function (e) {
        console.log(e);
        this.displayProgressLoader(false);
      });
  }

  render() {
    if (this.state.loading || !this.state.data) {
      return <div></div>;
    }



    return (
      <div>
        <Helmet title={this.createPageTitle(this.state.data.title)} />
        <Movie movie={this.state.data} rootBackdropPath={rootBackdropPath} />
      </div>
    );
  }
}