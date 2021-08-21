import React from 'react';
import { useQuery } from '@apollo/client';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

import ViewOperationLaunched from '../ViewOperaionLaunched';
import ViewOperationСonfirmation from '../ViewOperationConfirmation';

import { GET_LAUNCHED_MISSION } from './requests';

const ViewOperation = () => {
  const { data, loading, error } = useQuery(GET_LAUNCHED_MISSION);
  const match = useRouteMatch();

  if (loading || error) return null;

  const isLaunched = !!data.mission;
  return (
    <Switch>
      <Route exact path={match.path}>
        {isLaunched ? (
          <Redirect to={`${match.path}/launched`} />
        ) : (
          <Redirect to={`${match.path}/confirm`} />
        )}
      </Route>
      <Route path={`${match.path}/launched`}>
        {isLaunched ? <ViewOperationLaunched /> : <Redirect to="/operation/confirm" />}
      </Route>
      <Route path={`${match.path}/confirm`}>
        <ViewOperationСonfirmation />
      </Route>
    </Switch>
  );
};

export default ViewOperation;
