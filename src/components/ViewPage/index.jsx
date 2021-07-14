import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import ViewOperation from '../ViewOpetaion';
import ViewSimulation from '../ViewSimulation';
import ViewInputGroundTargets from '../ViewInputGroundTargets';
import ViewInputMission from '../ViewInputMission';
import ViewInputLocation from '../ViewInputLocation';

const ViewPage = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/control`}>
        <ViewSimulation />
      </Route>
      <Route path={`${match.path}/input/targets`}>
        <ViewInputGroundTargets />
      </Route>
      <Route path={`${match.path}/input/mission`}>
        <ViewInputMission />
      </Route>
      <Route path={`${match.path}/input/location`}>
        <ViewInputLocation />
      </Route>
      <Route path={match.path}>
        <ViewOperation />
      </Route>
    </Switch>
  );
};

export default ViewPage;
