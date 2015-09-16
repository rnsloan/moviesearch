import createBrowserHistory from 'history/lib/createBrowserHistory';
import MaterialDesignStyle from 'material-design-lite/material.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router';

import IndexView from './components/IndexView';
import Header from './components/Header/Header';
import MovieView from './components/MovieView';
import SearchView from './components/SearchView';
import styles from './App.scss';


export default class App extends React.Component {
  componentDidMount() {
    const Material = require('exports?componentHandler&MaterialRipple!material-design-lite/material.js');
    const layout = this.refs.mdlLayout;
    Material.componentHandler.upgradeElement(layout);
  }

  /*
    the <div> tag at the root of the render method is required
    because otherwise the Material Design JS + the 'mdl-js-layout'
    class stop react-router from working for some reason
   */

  render() {
    return (
      <div>
        <div ref="mdlLayout" className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header title="Movie Search"/>
          <main className="mdl-layout__content">
            <div className={styles.pageContent}>
              {this.props.children}
            </div>
          </main>
        </div>
      </div>
    );
  };
};

ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route component={App}>
      <Route path="/movie" component={MovieView}/>
      <Route path="/search" component={SearchView}/>
      <Route path="*" component={IndexView}/>
    </Route>
  </Router>
), document.getElementById('moviesearch-app'));

