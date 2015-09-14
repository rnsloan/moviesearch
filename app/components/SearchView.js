import React from 'react';

export default class extends React.Component {
  render() {
    const title = this.props.location.query.title;

    return (
      <div>
        <h1>Search</h1>
        <p>Searched for: {title}</p>
      </div>
    );
  }
}