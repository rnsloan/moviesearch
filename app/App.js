import createBrowserHistory from 'history/lib/createBrowserHistory';
import MaterialDesignStyle from 'material-design-lite/material.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import HomeView from './components/HomeView';
import MovieView from './components/MovieView';
import NotFoundView from './components/NotFoundView';
import SearchView from './components/SearchView';
import Style from './App.scss';

ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={HomeView} />
    <Route path="movie" component={MovieView} />
    <Route path="search" component={SearchView} />
    <Route path="*" component={NotFoundView} />
  </Router>
), document.getElementById('moviesearch-app'));

