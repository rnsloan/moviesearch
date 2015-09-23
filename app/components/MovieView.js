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

    this.displayProgressLoader = this.displayProgressLoader.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.loadMovie(nextProps.params.id);
  }

  componentDidMount() {
    this.loadMovie(this.props.params.id);
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
        <Helmet title='Movie Name' />
        <Movie movie={this.state.data} rootBackdropPath={rootBackdropPath} />
      </div>
    );
  }
}