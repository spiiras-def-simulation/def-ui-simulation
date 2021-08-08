import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import AppHeader from '../AppHeader';
import ViewPage from '../ViewPage';
import AppFooter from '../AppFooter';

import './index.css';

const App = () => (
  <Router>
    <div className="map-application">
      <AppHeader stylization="map-aplication-header" />
      <div className="map-application-content">
        <div className="content-container">
          <Switch>
            <Route exact path="/">
              <Redirect to="/operation" />
            </Route>
            <Route path="/operation">
              <ViewPage />
            </Route>
          </Switch>
        </div>
      </div>
      <AppFooter stylization="map-application-footer" />
    </div>
  </Router>
);

export default App;
