import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import ViewOperation from '../ViewOpetaion';
import ViewSimulation from '../ViewSimulation';
import ViewInputPage from '../ViewInputPage';

const ViewPage = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.path}>
        <ViewOperation />
      </Route>
      <Route path={`${match.path}/control`}>
        <ViewSimulation />
      </Route>
      <Route path={`${match.path}/input`}>
        <ViewInputPage />
      </Route>
    </Switch>
  );
};

export default ViewPage;
