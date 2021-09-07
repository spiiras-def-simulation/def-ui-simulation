import React from 'react';
import { useQuery } from '@apollo/client';

import UnitsGroupObjects from '../UnitsGroupObjects';

import { GET_UNITS_OBJECTS, SUBSCRIBE_CHANGE_UNITS_STATUS } from './requests';

const ShownStatus = ['SPAWNED', 'LAUNCHED', 'STOPPED', 'ATTACK_TARGET'];

const UnitsLaunchedWithData = () => {
  const { subscribeToMore, ...result } = useQuery(GET_UNITS_OBJECTS);

  if (result.loading || result.error) return null;

  const { units = [] } = result.data || {};
  return (
    <UnitsGroupObjects
      objects={units.filter(({ status }) => ShownStatus.includes(status))}
      subToUpdate={() =>
        subscribeToMore({
          document: SUBSCRIBE_CHANGE_UNITS_STATUS,
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;
            const { units: updates } = subscriptionData.data;
            const newUnits = updates.map(updated => {
              const oldUnitData = units.find(unit => unit.id === updated.id);
              return { ...oldUnitData, ...updated };
            });
            return { units: [...newUnits] };
          }
        })
      }
    />
  );
};

export default UnitsLaunchedWithData;
