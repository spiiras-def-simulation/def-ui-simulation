import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import ViewInputGroundTargets from '../ViewInputGroundTargets';
import ViewInputMission from '../ViewInputMission';
import ViewInputLocation from '../ViewInputLocation';

const ViewInputPage = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/targets`}>
        <ViewInputGroundTargets />
      </Route>
      <Route path={`${match.path}/mission`}>
        <ViewInputMission />
      </Route>
      <Route path={`${match.path}/location`}>
        <ViewInputLocation />
      </Route>
    </Switch>
  );
};

export default ViewInputPage;
