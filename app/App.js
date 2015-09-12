import createBrowserHistory from 'history/lib/createBrowserHistory';
import React from 'react';
import { Router, Route, DefaultRoute } from 'react-router';

import HomeView from './components/HomeView';
import MovieView from './components/MovieView';
import SearchView from './components/SearchView';

React.render((
  <Router history={createBrowserHistory()}>
    <Route path="movie" component={MovieView} />
    <Route path="search" component={SearchView} />
    <Route path="*" component={HomeView} />
  </Router>
), document.body);
