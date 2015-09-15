import React from 'react';
import ReactDOM from 'react-dom';

export default class extends React.Component {
  submitForm(e) {
    e.preventDefault();
    const searchQuery = this.refs.searchInput.value;
    this.props.history.pushState(null, `/search`, {title: searchQuery});
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <form onSubmit={(e) => this.submitForm(e)}>
          <div ref="mdlInput" className="mdl-textfield mdl-js-textfield">
            <input id="search" className="mdl-textfield__input" type="text" ref="searchInput" />
            <label className="mdl-textfield__label" htmlFor="search">Movie Title</label>
          </div>
        </form>
      </div>
    );
  }
}
