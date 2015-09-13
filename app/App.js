import createBrowserHistory from 'history/lib/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, DefaultRoute } from 'react-router';

import HomeView from './components/HomeView';
import MovieView from './components/MovieView';
import SearchView from './components/SearchView';
import Style from './App.css';

ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route path="movie" component={MovieView} />
    <Route path="search" component={SearchView} />
    <Route path="*" component={HomeView} />
  </Router>
), document.getElementById('moviesearch-app'));
