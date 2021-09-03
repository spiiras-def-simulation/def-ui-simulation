import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ViewOperation from '../ViewOperation';
import ViewSimulation from '../ViewSimulation';
import ViewInputPage from '../ViewInputPage';

const ViewPage = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/operation" />
    </Route>
    <Route path="/operation">
      <ViewOperation />
    </Route>
    <Route path="/control">
      <ViewSimulation />
    </Route>
    <Route path="/input">
      <ViewInputPage />
    </Route>
  </Switch>
);

export default ViewPage;
