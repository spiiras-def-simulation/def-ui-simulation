import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import ViewOperation from '../ViewOpetaion';
import ViewSimulation from '../ViewSimulation';

const ViewPage = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/simulation`}>
        <ViewSimulation />
      </Route>
      <Route path={match.path}>
        <ViewOperation />
      </Route>
    </Switch>
  );
};

export default ViewPage;
