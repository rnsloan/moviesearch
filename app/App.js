import createBrowserHistory from 'history/lib/createBrowserHistory';
import MaterialDesignStyle from 'material-design-lite/material.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, Router } from 'react-router';

import IndexView from './components/IndexView';
import Header from './components/Header/Header';
import MovieView from './components/MovieView';
import {ProgressLoader} from './components/ProgressLoader/ProgressLoader';
import ResultsContainer from './components/ResultsContainer';
import styles from './App.scss';

export default class App extends React.Component {
  componentDidMount() {
    const Material = require('exports?componentHandler&MaterialRipple!material-design-lite/material.js');
    const layout = this.refs.mdlLayout;
    Material.componentHandler.upgradeElement(layout);
  }

  render() {
    /*
     the <div> tag at the root is required because
     otherwise the Material Design JS 'upgrading' .mdl-js-layout
     stops react-router from working for some reason
     */
    return (
      <div>
        <ProgressLoader />
        <div ref="mdlLayout" className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header title="Search"/>
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
      <Route component={IndexView}>
        <Route path="/search" component={ResultsContainer}/>
      </Route>
      <Route path="/movie/:id" component={MovieView}/>
      <Route path="*" component={IndexView}/>
    </Route>
  </Router>
), document.getElementById('moviesearch-app'));

