import createBrowserHistory from 'history/lib/createBrowserHistory';
import MaterialDesignStyle from 'material-design-lite/material.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router';

import HomeView from './components/HomeView';
import MovieView from './components/MovieView';
import SearchView from './components/SearchView';
import Style from './App.scss';

const App = (props) => {
  return (
    <div>
      <p>Header</p>
      <hr />
      <hr />
      {props.children}
    </div>
  );
};

ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route component={App}>
      <Route path="/movie" component={MovieView}/>
      <Route path="/search" component={SearchView}/>
      <Route path="*" component={HomeView}/>
    </Route>
  </Router>
), document.getElementById('moviesearch-app'));

