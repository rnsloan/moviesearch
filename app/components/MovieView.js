import React from 'react';
import Helmet from "react-helmet";

export default class extends React.Component {
  render() {
    return (
      <div>
        <Helmet title='Movie Name' />
        <h1>Movie</h1>
      </div>
    );
  }
}